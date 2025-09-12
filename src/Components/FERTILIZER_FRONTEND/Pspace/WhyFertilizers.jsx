import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./WhyFertilizers.css";
import Green_Lottie from "../assets_sri/Green_Lottie.json.json";

const WhyFertilizers = ({ showScreen2, setShowScreen2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  if (showScreen2) return null;

  return (
    <div className={`uses-section ${isVisible ? 'visible' : ''}`}>
      <div className="content-container">
        {/* Left Section */}
        <div className="text-section">
          <h2 className="section-title">
            Why Fertilizers Matter? 
            <span className="plant-icon">🌱</span>
          </h2>

          <div className="section-text">
            <p>
              Fertilizers are the foundation of modern agriculture.
              Healthy soil is the key to healthy crops.
              Over time, soil loses its natural nutrients due to continuous farming, erosion, and climate factors.
            </p>
            
            <div className="highlight-box">
              <div className="icon">💡</div>
              <p>
                Fertilizers restore vital elements like nitrogen, phosphorus, and potassium—ensuring your crops grow strong and healthy.
              </p>
            </div>
            
            
          </div>

          <button 
            className="explore-button" 
            onClick={() => setShowScreen2(true)}
          >
            Explore Benefits
            <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="lottie-section">
          <div className="circle-outer">
            <div className="circle-inner">
              <div className="circle-ring"></div>
              <Lottie animationData={Green_Lottie} loop={true} className="lottie-animation" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-leaves">
        <div className="leaf leaf1">🍃</div>
        <div className="leaf leaf2">🍃</div>
        <div className="leaf leaf3">🍃</div>
      </div>
    </div>
  );
};

export default WhyFertilizers;