// FertilizerCardGrid.jsx
import React from "react";
import FertilizerCard from "./FertilizerCard";
import "./FertilizerCard.css";

const FertilizerCardGrid = ({
  showScreen2,
  selectedFertilizer,
  showCart,
  displayedFertilizers,
  setSelectedFertilizer,
  setQuantity,
  likedFertilizers,
  toggleLike,
}) => {
  if (!showScreen2 || selectedFertilizer || showCart) return null;

  return (
    <div className="screen2 container-fluid py-4">
      <div className="row g-5 justify-content-evenly">
        {displayedFertilizers.map((fertilizer, i) => (
          <div key={i} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
            <FertilizerCard
              fertilizer={fertilizer}
              setSelectedFertilizer={setSelectedFertilizer}
              setQuantity={setQuantity}
              likedFertilizers={likedFertilizers}
              toggleLike={toggleLike}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertilizerCardGrid;
