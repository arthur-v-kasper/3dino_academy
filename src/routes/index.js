import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from "routes/home";
import About from "routes/about";
import ProductDetails from "components/pages/ProductDetails";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/jobs" element={<ProductDetails />} />
  </Routes>
);


export default AppRoutes;
