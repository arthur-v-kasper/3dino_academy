import React from 'react';
import { render, screen } from "components/test-utils";

import Error404 from "./error404";

test('reders with sucess', () => {
  render(<Error404 />);
  expect(screen.getByText("Página não encontrada =(")).toBeInTheDocument();
})
