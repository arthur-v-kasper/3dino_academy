import React from 'react';
import { render, screen } from "components/test-utils";

import ProductDetails from "./ProductDetails";
import { buildProduct } from "models/builders/products"

test('Renders ProductDetals page', () => {
  render(<ProductDetails product={buildProduct()} />);
  expect(screen.getByText("Sleek Metal Pizza", { selector: "h1" })).toBeInTheDocument;
});
