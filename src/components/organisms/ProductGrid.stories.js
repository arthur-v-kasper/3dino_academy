import React from "react";

import ProductGrid from "./ProductGrid";
import PlaceHolderImage from "stories/assets/dino-vet2.jpg";

export default {
  title: "Components/Organims/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid 
    products={[
      {id: 1, image: PlaceHolderImage, title: "Título", summary: "Ex mollit nulla qui id laborum aute"},
      {id: 2, image: PlaceHolderImage, title: "Título 2", summary: "Ex mollit nulla qui id laborum aute"},
      {id: 3, image: PlaceHolderImage, title: "Título 3", summary: "Ex mollit nulla qui id laborum aute"},
      {id: 4, image: PlaceHolderImage, title: "Título 4", summary: "Ex mollit nulla qui id laborum aute"},
      {id: 5, image: PlaceHolderImage, title: "Título 5", summary: "Ex mollit nulla qui id laborum aute"},
      {id: 6, image: PlaceHolderImage, title: "Título 6", summary: "Ex mollit nulla qui id laborum aute"},
    ]}
  />
);
