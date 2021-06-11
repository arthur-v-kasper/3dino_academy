import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from "routes/home";
import About from "routes/about";
import ProductDetails from "routes/services";
import Error404 from "routes/error404";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/jobs/:slang" element={<ProductDetails />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);


export default AppRoutes;
