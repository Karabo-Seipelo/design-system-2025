import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorSwatches from ".";

jest.mock("remixicon/fonts/remixicon.css", () => {});

describe("ColorSwatches", () => {
  it("renders with default variant", () => {
    const handleClick = jest.fn();
    render(
      <ColorSwatches
        name="color-swatch"
        color="brown"
        onClick={handleClick}
        active={false}
      />,
    );
    const swatch = screen.getByTestId("color-swatch");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with default variant active", () => {
    render(<ColorSwatches name="color-swatch" color="brown" active={true} />);
    const swatch = screen.getByTestId("color-swatch");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with aria label", () => {
    render(
      <ColorSwatches
        name="color-swatch"
        color="brown"
        ariaLabel="Select color brown"
        active={false}
      />,
    );
    const swatch = screen.getByLabelText("Select color brown");
    expect(swatch).toBeInTheDocument();
  });

  it("renders with out of stock", () => {
    render(
      <ColorSwatches
        name="color-swatch"
        color="brown"
        isOutOfStock={true}
        active={false}
      />,
    );
    const swatch = screen.getByTestId("color-swatch");
    expect(swatch).toBeInTheDocument();
  });
});
