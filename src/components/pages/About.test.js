import React from 'react';
import { render, screen } from "components/test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});


test('Renders About page', () => {
  render(<About />);
  expect(screen.getByText("Conheça nossos professores")).toBeInTheDocument();
});

test('called scrolls to top in first render', () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
