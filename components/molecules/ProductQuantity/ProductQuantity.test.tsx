import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductQuantity.stories";

const { Default, OutOfStock, CustomClasses } = composeStories(stories);

describe("ProductQuantity", () => {
  it("renders the ProductQuantity component with all props", () => {
    render(<Default />);

    expect(screen.getByText("Quantity")).toBeInTheDocument();
  });

  it("renders the ProductQuanity with custom classes", () => {
    render(<CustomClasses />);
    const fieldset = screen.getByTestId("quantity-selector-fieldset");
    expect(fieldset).toHaveClass("bg-red-500");
  });

  it("renders the out-of-stock ProductQuantity component with all props", () => {
    render(<OutOfStock />);
    expect(screen.getByText("Quantity")).toBeInTheDocument();
  });
});
