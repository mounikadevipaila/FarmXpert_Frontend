// FertilizerCard.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";
import "./FertilizerCard.css";

const FertilizerCard = ({
  fertilizer,
  setSelectedFertilizer,
  setQuantity,
  likedFertilizers,
  toggleLike,
}) => {
  const isLiked = likedFertilizers.some(f => f.name === fertilizer.name);

  return (
    <div
      className="fertilizer-card daj"
      onClick={() => {
        setSelectedFertilizer(fertilizer);
        setQuantity(1);
      }}
    >
      <div className="one"></div>
      <div className="two daj">
        <img src={fertilizer.image} alt={fertilizer.name} />
      </div>
      <div className="card_detail">
        <div className="nameprice">
          <div className="three daj">{fertilizer.name}</div>
          <div className="four daj">{fertilizer.price}</div>
        </div>
        <div
          className={`heart daj ${isLiked ? "liked" : ""}`}
          title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(fertilizer);
          }}
        >
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default FertilizerCard;
