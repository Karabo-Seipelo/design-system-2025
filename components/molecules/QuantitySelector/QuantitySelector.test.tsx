import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuantitySelector from ".";

describe("QuantitySelector", () => {
  it("renders the QuantitySelector component with initial quantity", () => {
    render(
      <QuantitySelector
        name="quantity"
        initialQuantity={5}
        outOfStock={false}
        min={1}
        max={10}
        increment={1}
        decrement={1}
      />,
    );

    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  it("shows tooltip when increment button is disabled due to max quantity", () => {
    render(
      <QuantitySelector
        name="quantity"
        initialQuantity={10}
        outOfStock={false}
        min={1}
        max={10}
        increment={1}
        decrement={1}
      />,
    );

    const tooltip = screen.getByText("Insufficient stock");
    expect(tooltip).toBeInTheDocument();
  });

  it("shows tooltip when decrement button is disabled due to min quantity", () => {
    render(
      <QuantitySelector
        name="quantity"
        initialQuantity={1}
        outOfStock={false}
        min={1}
        max={10}
        increment={1}
        decrement={1}
      />,
    );

    const tooltip = screen.getByText("Minimum stock required");
    expect(tooltip).toBeInTheDocument();
  });
});
