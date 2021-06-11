import React from "react";

import ProductDetails from "./ProductDetails";

export default {
  title: "Components/Pages/ProductDetails",
  component: ProductDetails,
};

import { buildProduct } from "models/builders/products";

export const usage = () => (
  <ProductDetails product={buildProduct()}/>
);
