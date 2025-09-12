// src/Components/FERTILIZER_FRONTEND/Pspace/FertilizerDetail.js
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./FertilizerDetail.css";

const FertilizerDetail = ({
  selectedFertilizer,
  setSelectedFertilizer,
  addToCart,
  bgImage,
}) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/buy-form', {
      state: {
        selectedFertilizer,
        isCartMode: false
      }
    });
  };

  return (
    <AnimatePresence mode="wait">
      {selectedFertilizer && (
        <motion.div
          key="detail"
          className="fertilizer-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="detail-background">
            <img src={bgImage} alt="background" />
          </div>
          
          <div className="detail-container">
            <div className="detail-header">
              <button 
                className="back-button"
                onClick={() => setSelectedFertilizer(null)}
              >
                <FaArrowLeft />
              </button>
              <h2 className="product-title">{selectedFertilizer.name}</h2>
            </div>
            
            <div className="detail-content">
              <div className="product-image">
                <img 
                  src={selectedFertilizer.image} 
                  alt={selectedFertilizer.name} 
                  className="main-image"
                />
              </div>
              
              <div className="product-details">
                <div className="detail-list">
                  {[
                    ["Description", selectedFertilizer.description],
                    ["Cost per Unit", `₹${selectedFertilizer.price}`],
                    ["Packaging Size", selectedFertilizer.packaging],
                    ["Suitable Crops/Soils", selectedFertilizer.crops],
                    ["Nutrient Composition", selectedFertilizer.nutrients],
                    ["Application Instructions", selectedFertilizer.usage],
                    ["Benefits", selectedFertilizer.benefits],
                    ["Precautions", selectedFertilizer.precautions]
                  ].map(([label, value], i) => (
                    <div className="detail-item" key={i}>
                      <div className="detail-label">{label}:</div>
                      <div className="detail-value">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="action-buttons">
              <button 
                className="buy-button"
                onClick={handleBuyNow}
              >
                BUY NOW
              </button>
              <button 
                className="cart-button"
                onClick={() => {
                  addToCart(selectedFertilizer);
                  setSelectedFertilizer(null);
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FertilizerDetail;