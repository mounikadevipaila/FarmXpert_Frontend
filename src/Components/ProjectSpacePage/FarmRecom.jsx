import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FarmRecomCSS.css";

export default function FarmInputPage() {
  const [formData, setFormData] = useState({
    soilType: "",
    pH: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = Object.values(formData);
    if (fields.some((field) => field === "")) {
      toast.error("❌ Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🌾 Recommendation fetched!");
        setTimeout(() => {
          navigate("recommendations", { state: { crops: data.recommendation } });
        }, 1500); // Slight delay to let user see the toast
      } else {
        toast.error(data.error || "❌ Something went wrong.");
      }
    } catch (err) {
      console.error("🚫 Error submitting form:", err);
      toast.error("❌ Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="form-container fancy-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <motion.form
        onSubmit={handleSubmit}
        className="form-box enhanced-box"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h2 className="form-title">
          🌱 FarmXpert - Crop Recommendation
        </motion.h2>

        <div className="form-group">
          <label>Soil Type</label>
          <select name="soilType" value={formData.soilType} onChange={handleChange}>
            <option value="">Select Soil Type</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
            <option value="Loamy">Loamy</option>
            <option value="Silty">Silty</option>
            <option value="Peaty">Peaty</option>
            <option value="Chalky">Chalky</option>
          </select>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>pH Level</label>
            <input
              type="number"
              step="0.1"
              name="pH"
              value={formData.pH}
              onChange={handleChange}
              placeholder="e.g., 6.5"
            />
          </div>
          <div className="form-group">
            <label>Nitrogen (N)</label>
            <input
              type="number"
              name="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              placeholder="mg/kg"
            />
          </div>
          <div className="form-group">
            <label>Phosphorus (P)</label>
            <input
              type="number"
              name="phosphorus"
              value={formData.phosphorus}
              onChange={handleChange}
              placeholder="mg/kg"
            />
          </div>
          <div className="form-group">
            <label>Potassium (K)</label>
            <input
              type="number"
              name="potassium"
              value={formData.potassium}
              onChange={handleChange}
              placeholder="mg/kg"
            />
          </div>
          <div className="form-group">
            <label>Temperature (°C)</label>
            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="e.g., 25"
            />
          </div>
          <div className="form-group">
            <label>Humidity (%)</label>
            <input
              type="number"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              placeholder="e.g., 60"
            />
          </div>
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="e.g., Andhra Pradesh"
          />
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Submitting..." : "Submit"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
