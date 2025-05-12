import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductDetails.stories";
const { Default } = composeStories(stories);

describe("ProductDetails Component", () => {
  it.skip("renders the ProductDetails component", () => {
    render(<Default />);
    expect(screen.getByText("Product Details")).toBeInTheDocument();
  });
});
