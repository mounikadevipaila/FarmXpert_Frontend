// FertilizerBenefits.jsx
import React from "react";
import "./FertilizerBenefits.css";
import fertilizerBenefits from '../Pspace/fertilizerBenefits.js';

const FertilizerBenefits = ({ showScreen2 }) => {
  if (showScreen2) return null;

  return (
    <div className="fertilizer-benefits">
      <div className="benefits-header">
        <div className="header-content">
          <h1>How Fertilizers Help Crops?</h1>
          <p>Discover the science behind enhanced agricultural productivity</p>
          <div className="decoration">
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
          </div>
        </div>
      </div>

      <div className="benefits-grid">
        {fertilizerBenefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="card-icon">
              <img src={item.image} alt={`Benefit ${index + 1}`} />
            </div>
            <div className="card-content">
              <h3>{item.heading}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertilizerBenefits;