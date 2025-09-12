import React from "react";
import { Routes, Route } from "react-router-dom";

import FarmInputPage from "./FarmRecom";
import Recommendations from "./Recommendations";

const RecomFull = () => {
  return (
    <Routes>
      <Route index element={<FarmInputPage />} /> {/* /recommend */}
      <Route path="recommendations" element={<Recommendations />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default RecomFull;

