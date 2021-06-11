import faker from "faker";

import DinoDefault from "stories/assets/dino-vet2.jpg";

import products from "./fixtures/products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      ...products[i],
      image: DinoDefault
    });
  }

  return result;
};


export const buildProduct = () => buildProductList(1)[0];