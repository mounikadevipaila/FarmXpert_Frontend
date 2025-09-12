import React, { useState } from "react";
import axios from "axios";
import "./DiseaseIdentifier.css";

function DiseaseIdentifier() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(selectedFile ? URL.createObjectURL(selectedFile) : null);
    setResult(""); // clear previous result
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      // Updated URL to match Node.js backend route
      const response = await axios.post(
        "http://127.0.0.1:5000/api/analyze",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResult(response.data.result);
    } catch (error) {
      setResult(
        "❌ Error: " + (error.response?.data?.error || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="farm_app-container">
      <h2>AI Plant Disease Identifier</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="farm_file-input"
      />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="farm_image-preview" />
      )}
      <button onClick={handleUpload} className="farm_analyze-btn" disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result ? (
        <div className="farm_result-card">
          {result.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      ) : (
        <div className="farm_result-box">Results will appear here...</div>
      )}
    </div>
  );
}

export default DiseaseIdentifier;
  