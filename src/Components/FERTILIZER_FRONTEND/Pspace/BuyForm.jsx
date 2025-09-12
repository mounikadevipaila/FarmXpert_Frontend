// src/Components/FERTILIZER_FRONTEND/Pspace/BuyForm.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import "./BuyForm.css";

const BuyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [selectedFertilizer, setSelectedFertilizer] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pinCode: "",
    address: "",
    payment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state?.selectedFertilizer) {
      setSelectedFertilizer(state.selectedFertilizer);
    }
  }, [state]);

  const getPrice = () => {
    if (!selectedFertilizer) return 0;
    let priceValue = selectedFertilizer.price;
    if (typeof priceValue === "string") {
      priceValue = priceValue.replace(/[^0-9.]/g, "");
    }
    return parseFloat(priceValue) * quantity;
  };

  const totalPrice = getPrice();

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.payment) {
      alert("Please select a payment method");
      return;
    }
    
    setIsSubmitting(true);
    
    // Create order object
    const order = {
      ...formData,
      fertilizerName: selectedFertilizer.name,
      quantity,
      totalPrice,
      image: selectedFertilizer.image
    };

    // Navigate to order confirmation with order details
    navigate("/order-confirmed", { state: { order } });
  };

  const handleClose = () => navigate("/store");

  if (!selectedFertilizer) {
    return (
      <div className="BuyForm-wrapper">
        <div className="loading">Loading product details...</div>
      </div>
    );
  }

  return (
    <div className="BuyForm-wrapper">
      <div className="product-card">
        <div className="close-btn" onClick={handleClose}>
          <ImCross />
        </div>
        <img
          src={selectedFertilizer.image}
          alt={selectedFertilizer.name}
          className="product-image"
        />
        <h2 className="product-title">{selectedFertilizer.name}</h2>
        <div className="quantity-section">
          <span>Quantity:</span>
          <div className="quantity-controls">
            <motion.button
              className="qty-btn"
              onClick={decreaseQty}
              whileTap={{ scale: 1.2 }}
            >
              <FaMinus />
            </motion.button>
            <motion.div
              key={quantity}
              className="qty-number"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
            >
              {quantity}
            </motion.div>
            <motion.button
              className="qty-btn"
              onClick={increaseQty}
              whileTap={{ scale: 1.2 }}
            >
              <FaPlus />
            </motion.button>
          </div>
        </div>
        <div className="total-price">Total: ₹{totalPrice.toFixed(2)}</div>
      </div>

      <form className="order-form" onSubmit={handleSubmit}>
        <h2>Shipping Details</h2>
        <div className="form-grid">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Full Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="payment-section">
          <h3>Payment Method</h3>
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={formData.payment === "upi"}
              onChange={handleChange}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={formData.payment === "netbanking"}
              onChange={handleChange}
            />
            Net Banking
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={formData.payment === "cod"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "✅ Confirm & Place Order"}
        </motion.button>
      </form>
    </div>
  );
};

export default BuyForm;