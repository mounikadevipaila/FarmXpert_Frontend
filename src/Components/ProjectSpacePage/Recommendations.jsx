import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";


import WheatImg from "../../assets/Wheat1.jpg";
import RiceImg from "../../assets/Rice1.jpg";
import MilletsImg from "../../assets/Millets1.jpg";
import SugarcaneImg from "../../assets/Sugercane1.jpg";
import MaizeImg from "../../assets/Maize.jpg";
import BarleyImg from "../../assets/Barley1.jpg";

const cropImages = {
  Wheat: WheatImg,
  Rice: RiceImg,
  Millets: MilletsImg,
  Sugarcane: SugarcaneImg,
  Maize: MaizeImg,
  Barley: BarleyImg,
};

export default function Recommendations() {
  const location = useLocation();
  const navigate = useNavigate();

  const crops = location.state?.crops || [];

  if (!crops.length) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", marginTop: "100px" }}>
        <h2>No crop recommendations found.</h2>
        <button
          onClick={() => navigate("..")}
          style={{
            backgroundColor: "#2e7d32",
            color: "white",
            padding: "0.7rem 1.5rem",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          🔙 Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "100px auto 0 auto", // 👈 brings it down
        background: "linear-gradient(to right, #dff5e1, #f0fff4)",
        borderRadius: "20px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2
        style={{
          color: "#2e7d32",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        🌾 Recommended Crops For Your Farm
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
          gap: "1.5rem",
        }}
      >
        {crops.map((crop, idx) => (
          <motion.div
            key={crop}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "1rem",
              boxShadow: "0 10px 20px rgba(34, 139, 34, 0.15)",
              textAlign: "center",
              cursor: "default",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 25px rgba(34, 139, 34, 0.3)",
            }}
          >
            <img
              src={cropImages[crop] || DefaultImg}
              alt={crop}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "1rem",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              }}
            />
            <h3
              style={{
                color: "#2e7d32",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              {crop}
            </h3>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={() => navigate("..")}
          style={{
            backgroundColor: "#fbbc42",
            color: "white",
            padding: "0.7rem 1.5rem",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
           <FaArrowLeft style={{ color: "white" }} />
             &nbsp; Back to Form
        </button>
      </div>
    </motion.div>
  );
}
