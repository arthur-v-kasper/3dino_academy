import React from 'react'
import ThemeProvider from "styles/ThemeProvider";
import { render } from "@testing-library/react";

const TestProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);


export * from "@testing-library/react";

/**
 * Sobreescrevendo o render padrão para considerar o ThemeProvider.
 * Mais detalhes na aula 88 do curso.
 */
const customRender = (ui, options) => 
  render(ui, {wrapper: TestProvider, ...options });

export { customRender as render };
