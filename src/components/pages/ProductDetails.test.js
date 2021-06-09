import React from 'react';
import { render, screen } from "components/test-utils";

import ProductDetails from "./ProductDetails";

test('Renders ProductDetals page', () => {
  render(<ProductDetails />);
  expect(screen.queryAllByText("Nome do serviço")).toBeInTheDocument;
});
