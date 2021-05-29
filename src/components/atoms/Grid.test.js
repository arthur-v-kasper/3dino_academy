import React from 'react';
import {render} from "components/test-utils";

import Grid from "./Grid";

test('match snapshot Grid with no params', () => {
  const { asFragment } = render(<Grid></Grid>);

  expect(asFragment()).toMatchSnapshot();
})


test('match snapshot Grid with params', () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

  expect(asFragment()).toMatchSnapshot();
})

test('match snapshot Grid with sm and lg params', () => {
  const { asFragment } = render(<Grid sm={6} lg={12}></Grid>);

  expect(asFragment()).toMatchSnapshot();
})
