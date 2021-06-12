import React from 'react'

import { render } from "components/test-utils";

import About from "./about";

test('called scrolls to top in first render', () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
