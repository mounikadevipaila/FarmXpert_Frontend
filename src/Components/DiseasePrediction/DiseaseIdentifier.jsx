import React, { useState } from "react";
import axios from "axios";
import "./DiseaseIdentifier.css";

function DiseaseIdentifier() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(selectedFile ? URL.createObjectURL(selectedFile) : null);
    setResult(null); // Clear previous result
  };

  // Upload and analyze the image
  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/analyze`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Expect backend to return { result: { disease: "...", confidence: "..." } } or similar JSON
      if (response.data && response.data.result) {
        const resData = response.data.result;

        // If result is object, convert to readable string
        const formattedResult =
          typeof resData === "object" ? JSON.stringify(resData, null, 2) : resData;

        setResult(formattedResult);
      } else {
        setResult("❌ No result returned from server");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setResult(
        "❌ Error: " +
          (error.response?.data?.error || error.message || "Unknown error")
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

      <button
        onClick={handleUpload}
        className="farm_analyze-btn"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      <div className="farm_result-box">
        {result ? (
          <pre className="farm_result-card">{result}</pre>
        ) : (
          <p>Results will appear here...</p>
        )}
      </div>
    </div>
  );
}

export default DiseaseIdentifier;
