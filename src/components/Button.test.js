import React from 'react';
import { render, fireEvent } from "./test-utils";

import Button, {ButtonColors, ButtonsVariants} from "./Button";

test("renders a text", () => {
  const { getByText } = render(<Button>Click Here</Button>);

  expect(getByText("Click Here")).toBeInTheDocument();
});

test("trigger event o click", () => {
  const handleClick = jest.fn(); // jest.fn() para mockar functions

  const { getByRole } = render(<Button onClick={handleClick} />);

  fireEvent.click(getByRole("button"));

  expect(handleClick).toBeCalled();
});

/**Object.values(ButtonColors).map((item) => [item])
 * Pega os valores de um array e converte cada item em um array de um item só, mais detalhes na aula 90 
 */
test.each( Object.values(ButtonColors).map((item) => [item]) )("renders with color %s", (color) =>{
  const {asFragment} = render(<Button color={color}></Button>);

  expect(asFragment()).toMatchSnapshot();
})

test.each( Object.values(ButtonsVariants).map((item) => [item]) )("renders with variant %s", (variant) =>{
  const {asFragment} = render(<Button variant={variant}></Button>);

  expect(asFragment()).toMatchSnapshot();
})

test("renders with color primary and variant outlined",() => {
  const {asFragment} = render(<Button variant="outlined" color="primary"></Button>);

  expect(asFragment()).toMatchSnapshot();
})

test("renders with color primary and variant link",() => {
  const {asFragment} = render(<Button variant="link" color="primary"></Button>);

  expect(asFragment()).toMatchSnapshot();
})
