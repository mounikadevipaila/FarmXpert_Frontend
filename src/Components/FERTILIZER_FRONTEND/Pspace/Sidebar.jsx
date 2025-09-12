// Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { MdFilterListAlt } from "react-icons/md";

const Sidebar = ({
  sidebarOpen,
  closeSidebar,
  selectedType,
  handleTypeClick,
  setDisplayedFertilizers,
  fertilizers,
  setSelectedType,
}) => {
  return (
    <>
      {sidebarOpen && <div className="dim-overlay" onClick={closeSidebar}></div>}
      <div className={`sidebar slide-in ${sidebarOpen ? "open" : ""}`}>
        <div className="side_bg">
          <div className="filter">
            Filter <MdFilterListAlt />
          </div>

          <div className="side_heading">By Type of Fertilizer🌿</div>
          {["Organic", "Inorganic", "Biofertilizers"].map((type) => (
            <div
              key={type}
              className={`side_text ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </div>
          ))}

          <div className="side_heading">By Nutrient Content🧪</div>
          {["Nitrogen", "Phosphorus", "Potassium"].map((type) => (
            <div
              key={type}
              className={`side_text ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type} Fertilizers
            </div>
          ))}

          <div className="side_heading">By Crop Type🌱</div>
          {["Fruits & Vegetables", "Flowers & Lawns", "Paddy & Others"].map((type) => (
            <div
              key={type}
              className={`side_text ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </div>
          ))}

          <div
            className={`side_text ${selectedType === null ? "selected" : ""}`}
            onClick={() => {
              setDisplayedFertilizers(fertilizers); // Reset to default
              setSelectedType(null);
              closeSidebar();
            }}
          >
            Popular Fertilizers✨
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
