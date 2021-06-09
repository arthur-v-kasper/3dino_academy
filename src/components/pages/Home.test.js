import React from 'react';
import { render, screen } from "components/test-utils";

import Home from "./Home";

test('Renders Home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
})
