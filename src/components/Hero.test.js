import React from 'react'
import {  render } from './test-utils'

import Hero from "./Hero"

test("renders with children", () =>{
  const { getByText } = render(
    <Hero>
      <p>Arthur V Kasper</p>
    </Hero>
  )

  expect(getByText("Arthur V Kasper")).toBeInTheDocument();
})


test("renders image backgrounds", () =>{
  const image = "http://teste/image.jpg"
  const {getByTestId} = render(<Hero image={image} />);
  
  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image
  })
})
