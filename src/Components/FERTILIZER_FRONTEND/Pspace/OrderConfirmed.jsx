import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './OrderConfirmed.css';

const OrderConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { width, height } = useWindowSize();
  
  const order = state?.order;

  useEffect(() => {
    if (!order) {
      const timer = setTimeout(() => {
        navigate('/store');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [order, navigate]);

  const handleContinue = () => {
    navigate('/store');
  };

  if (!order) {
    return (
      <div className="OrderConfirmed">
        <div className="confirmation-box">
          <h2>Order Not Found</h2>
          <p>Redirecting you back to the store...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="OrderConfirmed">
      <Confetti 
        width={width} 
        height={height} 
        recycle={false} 
        numberOfPieces={500}
        gravity={0.1}
      />
      
      <div className="confirmation-box">
        <div className="success-badge">✓</div>
        <div className="emoji-blast">
          <span>🎉</span>
          <span>🎊</span>
          <span>🥳</span>
          <span>🎈</span>
        </div>
        <h2>Order Confirmed!</h2>
        <p className="confirmation-message">Thank you for your purchase! Your order has been successfully placed.</p>
        
        <div className="order-details">
          <div className="order-summary">
            <div className="product-image-container">
              <img src={order.image} alt={order.fertilizerName} className="product-image" />
            </div>
            <div className="product-details">
              <h3>{order.fertilizerName}</h3>
              <div className="product-info-grid">
                <div>
                  <span className="info-label">Quantity:</span>
                  <span className="info-value">{order.quantity}</span>
                </div>
                <div>
                  <span className="info-label">Price:</span>
                  <span className="info-value">₹{(order.totalPrice / order.quantity).toFixed(2)}</span>
                </div>
                <div>
                  <span className="info-label">Total:</span>
                  <span className="info-value highlight">₹{order.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="details-grid">
            <div className="shipping-details">
              <h3><span className="icon">📍</span> Shipping To</h3>
              <div className="details-content">
                <p><strong>{order.fullName}</strong></p>
                <p>{order.address}</p>
                <p>{order.city}, {order.state} - {order.pinCode}</p>
                <p><span className="info-label">Email:</span> {order.email}</p>
                <p><span className="info-label">Phone:</span> {order.phone}</p>
              </div>
            </div>
            
            <div className="payment-details">
              <h3><span className="icon">💳</span> Payment Method</h3>
              <div className="details-content">
                <p className="payment-method">
                  {order.payment === "cod" ? "Cash on Delivery (COD)" : 
                   order.payment === "upi" ? "UPI Payment" : 
                   "Net Banking"}
                </p>
                <p className="payment-status">
                  <span className="status-badge success">Paid</span>
                  {order.payment === "cod" && <span className="status-badge warning">Pay on Delivery</span>}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-timeline">
          <h3><span className="icon">📅</span> Order Timeline</h3>
          <div className="timeline-steps">
            <div className="timeline-step completed">
              <div className="step-indicator"></div>
              <div className="step-content">
                <p>Order Placed</p>
                <small>Today</small>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-indicator"></div>
              <div className="step-content">
                <p>Processing</p>
                <small>Estimated: Tomorrow</small>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-indicator"></div>
              <div className="step-content">
                <p>Shipped</p>
                <small>Estimated: 2-3 days</small>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-indicator"></div>
              <div className="step-content">
                <p>Delivered</p>
                <small>Estimated: 4-5 days</small>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleContinue}
          className="continue-btn"
        >
          Continue Shopping
          <span className="btn-arrow">→</span>
        </button>
        
        <div className="support-note">
          <p>Need help? <a href="/contact">Contact our support team</a> or call us at <strong>1800-123-4567</strong></p>
        </div>
      </div>
    </div>
  );
}; 

export default OrderConfirmed;