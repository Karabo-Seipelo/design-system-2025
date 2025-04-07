import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductQuantity from ".";

describe("ProductQuantity", () => {
  it("renders the ProductQuantity component with all props", () => {
    render(
      <ProductQuantity
        name="Test Product"
        initialQuantity={2}
        stock={10}
        classes="custom-class"
        outOfStock={false}
      />,
    );

    expect(screen.getByText("Quantity")).toBeInTheDocument();
    /*
    expect(screen.getByRole("fieldset")).toHaveClass(
      "custom-class flex flex-col gap-4"
    );
    */
  });

  it.skip("renders the QuantitySelector with correct props", () => {
    render(
      <ProductQuantity
        name="Test Product"
        initialQuantity={2}
        stock={10}
        outOfStock={false}
      />,
    );

    const quantitySelector = screen.getByRole("fieldset").querySelector("div");
    expect(quantitySelector).toBeInTheDocument();
    expect(quantitySelector).toHaveTextContent("Quantity");
  });

  it.skip("applies default class when no custom class is provided", () => {
    render(
      <ProductQuantity
        name="Test Product"
        initialQuantity={1}
        stock={5}
        outOfStock={false}
      />,
    );

    expect(screen.getByRole("fieldset")).toHaveClass("flex flex-col gap-4");
  });

  it.skip("renders correctly when outOfStock is true", () => {
    render(
      <ProductQuantity
        name="Test Product"
        initialQuantity={0}
        stock={0}
        outOfStock={true}
      />,
    );

    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByRole("fieldset")).toBeInTheDocument();
  });

  it.skip("renders QuantitySelector with min and max values", () => {
    render(
      <ProductQuantity
        name="Test Product"
        initialQuantity={1}
        stock={10}
        outOfStock={false}
      />,
    );

    const quantitySelector = screen.getByRole("fieldset").querySelector("div");
    expect(quantitySelector).toBeInTheDocument();
    expect(quantitySelector).toHaveTextContent("Quantity");
  });
});
