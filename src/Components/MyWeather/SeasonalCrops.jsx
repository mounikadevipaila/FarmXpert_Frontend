import React, { useState } from "react";
import styles from "./SeasonalCrops.module.css";

const seasonalData = {
  summer: [
    "🌻 Sunflower", "🌽 Maize", "🌾 Millet", "🥒 Cucumber", "🍉 Watermelon",
    "🍅 Tomato", "🥭 Mango", "🫑 Capsicum", "🍆 Brinjal", "🌱 Okra (Ladyfinger)"
  ],
  winter: [
    "🌿 Wheat", "🥬 Mustard", "🥕 Carrot", "🍓 Strawberry", "🥔 Potato",
    "🥦 Broccoli", "🍠 Sweet Potato", "🥗 Lettuce", "🌱 Spinach", "🌰 Peas"
  ],
  rainy: [
    "🍚 Rice", "🧅 Onion", "🌱 Sugarcane", "🌿 Jute", "🌽 Corn",
    "🌶️ Chili", "🍆 Brinjal", "🥥 Coconut", "🌰 Groundnut", "🍍 Pineapple"
  ]
};

const SeasonalCrops = () => {
  const [selected, setSelected] = useState("");
  const [crops, setCrops] = useState([]);

  const handleClick = () => {
    setCrops(seasonalData[selected] || []);
  };

  return (
    <div>
      <h2>Know About Seasonal Crops 🌤️</h2>
      <div className={styles.selectRow}>
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value="">-- Select a Season --</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="rainy">Rainy</option>
        </select>
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className={styles.card}>
        {crops.length > 0 ? (
          crops.map((crop, index) => <div key={index}>{crop}</div>)
        ) : (
          <p>Please select a season to view crops.</p>
        )}
      </div>
    </div>
  );
};

export default SeasonalCrops;
