// src/Components/FERTILIZER_FRONTEND/Pspace/Wishlist.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import axios from "axios";
import "./Wishlist.css";

const Wishlist = ({ showFavorites, setShowFavorites, setSelectedFertilizer, setQuantity }) => {
  const [likedFertilizers, setLikedFertilizers] = useState([]);
  const backendUrl = "https://farmxpert-kfjq.onrender.com";

  // Fetch wishlist from backend
  const fetchWishlist = async () => {
    try {
      const response = await axios.get(`${backendUrl}/wishlist`);
      setLikedFertilizers(response.data);
    } catch (error) {
      console.error("Error loading wishlist:", error);
    }
  };

  useEffect(() => {
    if (showFavorites) fetchWishlist();
  }, [showFavorites]);

  // Toggle like/unlike (add/remove from wishlist)
  const toggleLike = async (fertilizer) => {
    try {
      const exists = likedFertilizers.find((item) => item.name === fertilizer.name);
      if (exists) {
        await axios.delete(`${backendUrl}/wishlist/remove/${fertilizer.name}`);
      } else {
        await axios.post(`${backendUrl}/wishlist/add`, fertilizer);
      }
      fetchWishlist();
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showFavorites && (
        <motion.div
          key="wishlist"
          className="screen4 daj"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="wishlist-header daj">
            <div className="arr_box daj" onClick={() => setShowFavorites(false)}>
              <FaArrowLeft />
            </div>
            <div className="wishlist-title daj">❤️ Your Wishlist</div>
          </div>

          <div className="wishlist-body container-fluid py-4">
            <div className="row g-5 justify-content-evenly">
              {likedFertilizers.length === 0 ? (
                <p className="text-center">No favorites yet. Click the 💛 heart icon to add.</p>
              ) : (
                likedFertilizers.map((fertilizer, i) => (
                  <div key={i} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
                    <div
                      className="fertilizer-card daj"
                      onClick={() => {
                        setSelectedFertilizer(fertilizer);
                        setQuantity(1);
                        setShowFavorites(false);
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
                          className="heart daj liked"
                          title="Remove from wishlist"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(fertilizer);
                          }}
                        >
                          <FaHeart />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Wishlist;
