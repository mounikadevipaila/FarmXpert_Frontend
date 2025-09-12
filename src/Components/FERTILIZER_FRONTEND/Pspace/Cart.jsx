import React, { useState } from "react";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import "./Cart.css";

const Cart = ({
  cartItems,
  setShowCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setShowBuyForm,
  setIsCartMode,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const grandTotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setShowCart(false), 300);
  };

  return (
    <div className={`cart-container ${isClosing ? 'closing' : ''}`}>
      <div className="cart-overlay" onClick={handleClose}></div>
      
      <div className="cart-content">
        {/* Cart Header */}
        <div className="cart-header">
          <button className="back-button" onClick={handleClose}>
            <FaArrowLeft />
            <span>Continue Shopping</span>
          </button>
          
          <div className="cart-title">
            <RiShoppingBag4Fill className="cart-icon" />
            <h2>Your Shopping Cart</h2>
          </div>
          
          <div className="items-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</div>
        </div>

        {/* Cart Items */}
        <div className="cart-items-container">
          {cartItems.length > 0 ? (
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => decreaseQuantity(index)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => increaseQuantity(index)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    
                    <div className="item-subtotal">₹{item.subtotal.toFixed(2)}</div>
                  </div>
                  
                  <button 
                    className="delete-btn" 
                    onClick={() => removeFromCart(index)}
                    aria-label="Remove item"
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-cart">
              <div className="empty-bag-icon">
                <RiShoppingBag4Fill />
              </div>
              <h3>Your cart is empty</h3>
              <p>Add some fertilizers to get started!</p>
              <button className="shop-btn" onClick={handleClose}>
                Browse Products
              </button>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-container">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
              <div className="shipping">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="grand-total">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              className="checkout-btn"
              onClick={() => {
                setShowCart(false);
                setIsCartMode(true);
                setShowBuyForm(true);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;