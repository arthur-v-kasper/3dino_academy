import React from 'react';
import { render, screen, fireEvent } from "components/test-utils";

import Accordion from "./Accordion";

const title = "My title";
const text = "My children";

test('renders with title', () => {
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument;
});

test('renders without children', () => {
  render(<Accordion>{text}</Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument;
});

test('called onChange when it is clicked', async () => {
  const handleChange = jest.fn(); //mocking a function

  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));
  
  expect(handleChange).toBeCalledTimes(1);
});



describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);
      expect(screen.queryByText(text)).toBeInTheDocument;
    });
  
    test("triggers onChange whens it is clicked", async () => {
      const handleChange = jest.fn(); //mocking a function

      render(<Accordion title={title} onChange={handleChange} open />);
      await fireEvent.click(screen.getByText(title));
  
      expect(handleChange).toBeCalledTimes(1);
    });

    test("hide children when open changes to false", () => {
      const {rerender} = render(<Accordion title={title} open>{text}</Accordion>);
      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument;
    });

    test("call default function whens it is clicked", async () => {
      render(<Accordion title={title}  open />);

      await fireEvent.click(screen.getByText(title));
  
    });

  });

  describe("when starts opened", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      expect(screen.queryByText(text)).not.toBeInTheDocument;
    });
  });
});  
