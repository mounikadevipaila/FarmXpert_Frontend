// FertilizerCategories.jsx
import React from 'react';
import { IoMdFlower, IoMdLeaf } from 'react-icons/io';
import { GiPlantSeed, GiFertilizerBag } from 'react-icons/gi';
import { MdOutlineGrass, MdLocalFlorist } from 'react-icons/md';
import './FertilizerCategories.css';

const FertilizerCategories = ({ showScreen2 }) => {
  if (showScreen2) return null;

  return (
    <div className="fertilizer-categories">
      <div className="banner">
        <div className="banner-content">
          <h1>Fertilizer Categories</h1>
          <p>Explore our comprehensive range of fertilizers tailored for every agricultural need</p>
        </div>
      </div>

      <div className="categories-grid">
        {/* By Type */}
        <div className="category-card">
          <div className="category-header">
            <GiFertilizerBag className="category-icon" />
            <h2>By Type of Fertilizer</h2>
          </div>
          <div className="category-items">
            <div className="category-item">
              <div className="item-icon">
                <IoMdLeaf />
              </div>
              <span>Organic Fertilizers</span>
            </div>
            <div className="category-item">
              <div className="item-icon">
                <IoMdFlower />
              </div>
              <span>Inorganic Fertilizers</span>
            </div>
            <div className="category-item">
              <div className="item-icon">
                <GiPlantSeed />
              </div>
              <span>Biofertilizers</span>
            </div>
          </div>
        </div>

        {/* By Nutrient */}
        <div className="category-card">
          <div className="category-header">
            <div className="chemical-icon">
              <div className="flask">🧪</div>
            </div>
            <h2>By Nutrient Content</h2>
          </div>
          <div className="category-items">
            <div className="category-item">
              <div className="item-icon">
                <span>N</span>
              </div>
              <span>Nitrogen Fertilizers</span>
            </div>
            <div className="category-item">
              <div className="item-icon">
                <span>P</span>
              </div>
              <span>Phosphorus Fertilizers</span>
            </div>
            <div className="category-item">
              <div className="item-icon">
                <span>K</span>
              </div>
              <span>Potassium Fertilizers</span>
            </div>
          </div>
        </div>

        {/* By Crop Type */}
        <div className="category-card">
          <div className="category-header">
            <MdOutlineGrass className="category-icon" />
            <h2>By Crop Type</h2>
          </div>
          <div className="category-items">
            <div className="category-item">
              <div className="item-icon">
                <span>🍎</span>
              </div>
              <span>For Fruits & Vegetables</span>
            </div>
            <div className="category-item">
              <div className="item-icon">
                <MdLocalFlorist />
              </div>
              <span>For Flowers & Lawns</span>
            </div>
            <div className="category-item">
              <div className="item-icon">
                <span>🌾</span>
              </div>
              <span>Paddy & Others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerCategories;