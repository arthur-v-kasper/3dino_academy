import React from 'react';
import {render, screen, fireEvent} from "components/test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i +=1 ){
    result.push({ id: i, title: `Teste ${i}` });
  }

  return result;
};

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
])("with %i products", (size, showOnly) => {
  
  test(`show only ${showOnly}`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  // async e await necessario para dar tempo do componente renderizar para o teste validar corretamente 
  test("show all products when the button is clicked", async () => {
    await render(<ProductGrid products={buildProducts(size)} />);

    fireEvent.click(screen.getByText("Lista completa de serviços"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });

})
