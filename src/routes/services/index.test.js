import React from 'react';
import { render, screen } from "components/test-utils";

import ProductDetailsRoute from "./index";

import { useProduct } from "hooks/products";
import { buildProduct } from "models/builders/products";

jest.mock("hooks/products")

test('renders with a product', () => {
  useProduct.mockReturnValue(buildProduct());

  render(<ProductDetailsRoute />);

  expect(screen.getByText("Sleek Metal Pizza", { selector: "h1" })).toBeInTheDocument;
})

test('not found product', () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailsRoute />);

  expect(screen.getByText("Serviço não encontrado", { selector: "h1" })).toBeInTheDocument;
})
