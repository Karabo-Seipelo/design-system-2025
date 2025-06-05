import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductCard.stories";
const { Portrait } = composeStories(stories);

describe("Product Card", () => {
  it("renders the Product Card", () => {
    render(<Portrait />);

    expect(screen.getByText("Cozy Comfort")).toBeInTheDocument();
    expect(
      screen.getByText("Plush fabrics and soothing designs"),
    ).toBeInTheDocument();
  });
});
