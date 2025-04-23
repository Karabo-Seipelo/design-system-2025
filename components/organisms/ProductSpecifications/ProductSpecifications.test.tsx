import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProuctSpecifications.stories";
// import ProductSpecifications from ".";

const { Default } = composeStories(stories);

describe("ProductSpecifications Component", () => {
  it("renders the product specifications", () => {
    render(<Default />);
    const specifications = screen.getByTestId("title");
    expect(specifications).toBeInTheDocument();
  });
});
