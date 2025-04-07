import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductColors from ".";

describe("ProductColors", () => {
  const mockSelected = jest.fn();
  const mockColors = ["red", "blue", "green"];
  const mockOutOfStock = ["green"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with available colors", () => {
    render(
      <ProductColors
        name="Test Product"
        colors={mockColors}
        selected={mockSelected}
        selectedColor={"blue"}
        outOfStock={mockOutOfStock}
      />,
    );

    const colorButtons = screen.getAllByRole("button");
    const activeSwatch = colorButtons[1];
    const outOfStockLine = screen.getByTestId("out-of-stock-line");
    expect(screen.getByText("Available Colors")).toBeInTheDocument();
    expect(colorButtons).toHaveLength(mockColors.length);
    expect(colorButtons[0]).toHaveStyle({ backgroundColor: "red" });
    expect(colorButtons[1]).toHaveStyle({ backgroundColor: "blue" });
    expect(colorButtons[2]).toHaveStyle({ backgroundColor: "green" });
    expect(activeSwatch).toHaveClass("outline-indigo-600");
    expect(outOfStockLine).toBeInTheDocument();
  });

  it("calls the selected function when a color is clicked", () => {
    render(
      <ProductColors
        name="Test Product"
        colors={mockColors}
        selected={mockSelected}
        selectedColor={"blue"}
        outOfStock={mockOutOfStock}
      />,
    );

    const colorButtons = screen.getAllByRole("button");
    const colorSwatch = colorButtons[0];
    colorSwatch.click();

    expect(mockSelected).toHaveBeenCalledWith({ selectedColor: "red" });
  });

  it("disables the out-of-stock color swatch", () => {
    render(
      <ProductColors
        name="Test Product"
        colors={mockColors}
        selected={mockSelected}
        selectedColor={"blue"}
        outOfStock={mockOutOfStock}
      />,
    );

    const colorButtons = screen.getAllByRole("button");
    const colorSwatch = colorButtons[2];
    const outOfStockLine = screen.getByTestId("out-of-stock-line");
    colorSwatch.click();
    expect(mockSelected).toHaveBeenCalledWith({ selectedColor: "green" });
    expect(outOfStockLine).toBeInTheDocument();
  });
});
