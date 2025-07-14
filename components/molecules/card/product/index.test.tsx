import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductCard.stories";
const { Primary } = composeStories(stories);

describe("Product Card", () => {
  it("renders the Product Card", () => {
    render(<Primary />);

    expect(screen.getByText("Cozy Comfort")).toBeInTheDocument();
    expect(
      screen.getByText("Plush fabrics and soothing designs")
    ).toBeInTheDocument();
  });
});
