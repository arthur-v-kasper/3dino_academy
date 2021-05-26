import React from 'react';
import { render } from '../components/test-utils'

import GlobalStyle from "./GlobalStyle";

test('match spapshot',() => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});
