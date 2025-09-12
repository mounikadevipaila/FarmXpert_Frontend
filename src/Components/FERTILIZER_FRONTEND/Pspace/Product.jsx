import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";

import './Product.css';
import fertilizerBenefits from "./fertilizerBenefits.js";
import fertilizers from "./Product.js";
import allfertilizers from "./AllFertilizers.js";
import bg_image from "../assets_sri/bg_image.jpg";

import WhyFertilizers from '../Pspace/WhyFertilizers.jsx';
import Sidebar from './Sidebar.jsx';
import FertilizerBenefits from '../Pspace/FertilizerBenefits.jsx';
import FertilizerCategories from './FertilizerCategories.jsx';
import FertilizerCardGrid from './FertilizerCardGrid.jsx';
import FertilizerDetail from './FertilizerDetail.jsx';
import Wishlist from './Wishlist.jsx';
import BuyForm from './BuyForm.jsx';
import Cart from './Cart.jsx';
import OrderConfirmed from '../Pspace/OrderConfirmed.jsx';

const Prod_page = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const screen1Ref = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedFertilizer, setSelectedFertilizer] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [displayedFertilizers, setDisplayedFertilizers] = useState(fertilizers);
    const [quantity, setQuantity] = useState(1);
    const [likedFertilizers, setLikedFertilizers] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [showScreen2, setShowScreen2] = useState(false);
    const [showBuyForm, setShowBuyForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        pinCode: "",
        address: "",
        payment: "",
    });
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmedOrder, setConfirmedOrder] = useState(null);
    const [isCartMode, setIsCartMode] = useState(false);

    // Handle navigation to BuyForm
    useEffect(() => {
        if (location.pathname === '/buy-form' && location.state) {
            setSelectedFertilizer(location.state.selectedFertilizer);
            setShowBuyForm(true);
        }
    }, [location]);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!screen1Ref.current || selectedFertilizer) return;
            const sticky = screen1Ref.current.offsetTop;
            if (window.pageYOffset > sticky) {
                screen1Ref.current.classList.add("sticky");
            } else {
                screen1Ref.current.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const increaseQty = () => setQuantity(prev => prev + 1);
    const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const totalPrice = selectedFertilizer ? selectedFertilizer.unitPrice * quantity : 0;
    
    const handleTypeClick = (type) => {
        const filtered = allfertilizers.filter(f => f.type === type);
        setDisplayedFertilizers(filtered.slice(0, 16));
        setSelectedType(type);
        closeSidebar();
    };

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(err => console.error("Error loading cart items:", err));

        fetch('http://localhost:5000/wishlist')
            .then(res => res.json())
            .then(data => setLikedFertilizers(data))
            .catch(err => console.error("Error loading wishlist:", err));
    }, []);

    const toggleLike = async (fertilizer) => {
        const exists = likedFertilizers.find(item => item.name === fertilizer.name);

        if (exists) {
            setLikedFertilizers(prev => prev.filter(item => item.name !== fertilizer.name));
            try {
                await fetch(`http://localhost:5000/wishlist/remove/${encodeURIComponent(fertilizer.name)}`, {
                    method: 'DELETE'
                });
                toast.info(`${fertilizer.name} removed from wishlist 💔`);
            } catch (error) {
                console.error("Error removing from wishlist:", error);
            }
        } else {
            setLikedFertilizers(prev => [...prev, fertilizer]);
            try {
                await fetch('http://localhost:5000/wishlist/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(fertilizer),
                });
                toast.success(`${fertilizer.name} added to wishlist 💛`);
            } catch (error) {
                console.error("Error adding to wishlist:", error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        const { fullName, email, phone, city, state, pinCode, address, payment } = formData;

        if (!fullName || !email || !phone || !city || !state || !pinCode || !address || !payment) {
            alert("Please fill out all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const pinRegex = /^\d{6}$/;

        if (!emailRegex.test(email)) return alert("Invalid email format.");
        if (!phoneRegex.test(phone)) return alert("Enter a valid 10-digit phone number.");
        if (!pinRegex.test(pinCode)) return alert("PIN code must be a 6-digit number.");

        try {
            const orderPayload = {
                ...formData,
                orderItems: isCartMode
                    ? cartItems.map(item => ({
                        name: item.name,
                        image: item.image,
                        quantity: item.quantity,
                        subtotal: item.subtotal,
                    }))
                    : [{
                        name: selectedFertilizer.name,
                        image: selectedFertilizer.image,
                        quantity,
                        subtotal: totalPrice,
                    }],
                orderMode: isCartMode ? "cart" : "single",
                fertilizerName: isCartMode ? "Multiple Items" : selectedFertilizer.name,
                fertilizerImage: isCartMode ? "multiple.jpg" : selectedFertilizer.image,
                quantity: isCartMode
                    ? cartItems.reduce((total, item) => total + item.quantity, 0)
                    : quantity,
                totalPrice: isCartMode
                    ? cartItems.reduce((sum, item) => sum + item.subtotal, 0)
                    : totalPrice,
            };

            const res = await fetch("http://localhost:5000/orders/place", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderPayload),
            });

            if (!res.ok) throw new Error("Order failed");

            const data = await res.json();
            setConfirmedOrder(data.order);
            setShowConfirmation(true);
            setShowBuyForm(false);
            setFormData({ fullName: "", email: "", phone: "", city: "", state: "", pinCode: "", address: "", payment: "" });
            setQuantity(1);
            setSelectedFertilizer(null);

            if (isCartMode) {
                await fetch("http://localhost:5000/cart/clear", { method: "DELETE" });
                setCartItems([]);
                setIsCartMode(false);
            }
        } catch (err) {
            console.error("❌ Order error:", err);
            alert("Something went wrong while placing your order.");
        }
    };

    const addToCart = async (fertilizer) => {
        const existingIndex = cartItems.findIndex(item => item.name === fertilizer.name);
        const price = parseFloat(fertilizer.price.replace(/[^\d.]/g, ''));

        if (existingIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingIndex].quantity += 1;
            updatedCart[existingIndex].subtotal = updatedCart[existingIndex].quantity * price;
            setCartItems(updatedCart);
            toast.info(`${fertilizer.name} Quantity Increased 🛍️`);
        } else {
            const newItem = {
                name: fertilizer.name,
                image: fertilizer.image,
                type: fertilizer.type,
                price: price,
                quantity: 1,
                subtotal: price,
            };

            setCartItems(prev => [...prev, newItem]);

            try {
                const res = await fetch('http://localhost:5000/cart/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newItem),
                });

                if (!res.ok) throw new Error('Failed to add to cart in DB');
                const data = await res.json();
                setCartItems(prev =>
                    prev.map(item =>
                        item.name === newItem.name ? { ...item, _id: data.item._id } : item
                    )
                );
                toast.success(`${newItem.name} Added to cart! 🛒`);
            } catch (error) {
                toast.error("Error adding to cart ❌");
                console.error('MongoDB add failed:', error);
            }
        }
    };

    const removeFromCart = async (index) => {
        const itemToDelete = cartItems[index];
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);

        if (itemToDelete._id) {
            try {
                await fetch(`http://localhost:5000/cart/remove/${itemToDelete._id}`, {
                    method: 'DELETE',
                });
                toast.info(`${itemToDelete.name} Removed from cart 🗑️`);
            } catch (error) {
                console.error('MongoDB delete failed:', error);
            }
        }
    };

    const increaseQuantity = async (index) => {
        const updated = [...cartItems];
        const item = updated[index];
        const price = typeof item.price === "number" ? item.price : parseFloat(String(item.price).replace(/[^\d.]/g, ''));

        item.quantity += 1;
        item.subtotal = item.quantity * price;
        updated[index] = item;
        setCartItems(updated);

        if (item._id) {
            try {
                await fetch(`http://localhost:5000/cart/update/${item._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ quantity: item.quantity, subtotal: item.subtotal }),
                });
            } catch (err) {
                console.error("Failed to update quantity:", err);
            }
        }
    };

    const decreaseQuantity = async (index) => {
        const updated = [...cartItems];
        const item = updated[index];
        const price = typeof item.price === "number" ? item.price : parseFloat(String(item.price).replace(/[^\d.]/g, ''));

        if (item.quantity > 1) {
            item.quantity -= 1;
            item.subtotal = item.quantity * price;
            updated[index] = item;
            setCartItems(updated);

            if (item._id) {
                try {
                    await fetch(`http://localhost:5000/cart/update/${item._id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ quantity: item.quantity, subtotal: item.subtotal }),
                    });
                } catch (err) {
                    console.error("Failed to update quantity:", err);
                }
            }
        }
    };

    // NEW: Function to handle Buy Now navigation
    const handleBuyNow = (fertilizer) => {
        navigate('/buy-form', {
            state: {
                selectedFertilizer: fertilizer,
                isCartMode: false
            }
        });
    };

    // NEW: Function to handle Cart Buy Now navigation
    const handleCartBuyNow = () => {
        navigate('/buy-form', {
            state: {
                isCartMode: true,
                cartItems: cartItems
            }
        });
        setIsCartMode(true);
    };

    return (
        <>
            {/* Header */}
            {!selectedFertilizer && (
                <div className="screen1 daj" ref={screen1Ref}>
                    <div className="Header daj">
                        {showScreen2 && (
                            <div className="H_sec1 daj" onClick={toggleSidebar}><VscThreeBars /></div>
                        )}
                        <div className="H_sec2 daj">
                            <div className="welcome">Welcome to the Fertilizer Resource Hub🌾</div>
                        </div>
                        <div className="H_sec3 daj"
                            onClick={() => {
                                if (selectedFertilizer) {
                                    setSelectedFertilizer(null);
                                    setTimeout(() => {
                                        setShowFavorites(true);
                                    }, 300);
                                } else {
                                    setShowFavorites(prev => !prev);
                                }
                            }}
                        >
                            <FaHeart />
                        </div>
                        <div className="H_sec4 daj" onClick={() => setShowCart(!showCart)}><FaCartShopping /></div>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                closeSidebar={closeSidebar}
                selectedType={selectedType}
                handleTypeClick={handleTypeClick}
                setDisplayedFertilizers={setDisplayedFertilizers}
                fertilizers={fertilizers}
                setSelectedType={setSelectedType}
            />

            {/* Fertilizer Importance */}
            <WhyFertilizers showScreen2={showScreen2} setShowScreen2={setShowScreen2} />

            {/* In detail */}
            <FertilizerBenefits showScreen2={showScreen2} fertilizerBenefits={fertilizerBenefits} />

            {/* Categories */}
            <FertilizerCategories showScreen2={showScreen2} />

            {/* Fertilizer Cards */}
            <FertilizerCardGrid
                showScreen2={showScreen2}
                selectedFertilizer={selectedFertilizer}
                showCart={showCart}
                displayedFertilizers={displayedFertilizers}
                setSelectedFertilizer={setSelectedFertilizer}
                setQuantity={setQuantity}
                likedFertilizers={likedFertilizers}
                toggleLike={toggleLike}
            />

            {/* Dynamic Product Detail View */}
            <FertilizerDetail
                selectedFertilizer={selectedFertilizer}
                setSelectedFertilizer={setSelectedFertilizer}
                onBuyNow={handleBuyNow}  // UPDATED: Use navigation handler
                addToCart={addToCart}
                bgImage={bg_image}
            />

            {/* Wishlist */}
            <Wishlist
                showFavorites={showFavorites}
                setShowFavorites={setShowFavorites}
                likedFertilizers={likedFertilizers}
                setSelectedFertilizer={setSelectedFertilizer}
                setQuantity={setQuantity}
                toggleLike={toggleLike}
            />

            {/* Cart Items */}
            {showCart && (
                <Cart
                    cartItems={cartItems}
                    setShowCart={setShowCart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                    onBuyNow={handleCartBuyNow}  // UPDATED: Use navigation handler
                    setIsCartMode={setIsCartMode}
                />
            )}

            {showConfirmation && confirmedOrder && (
                <OrderConfirmed
                    order={confirmedOrder}
                    onClose={() => setShowConfirmation(false)}
                />
            )}

            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
};

export default Prod_page;