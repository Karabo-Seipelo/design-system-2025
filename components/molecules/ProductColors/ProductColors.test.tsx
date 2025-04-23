import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductColors.stories";
const { Default, OutOfStock } = composeStories(stories);
import ProductColors from ".";

describe("ProductColors", () => {
  const mockSelected = jest.fn();
  const mockColors = ["red", "blue", "green"];
  const mockOutOfStock = ["green"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with available colors", () => {
    render(<Default />);

    const colorButtons = screen.getAllByRole("button");
    const activeSwatch = colorButtons[0];

    expect(screen.getByText("Available Colors")).toBeInTheDocument();
    expect(colorButtons).toHaveLength(2);
    expect(colorButtons[0]).toHaveStyle({ backgroundColor: "green" });
    expect(colorButtons[1]).toHaveStyle({ backgroundColor: "brown" });
    expect(activeSwatch).toHaveClass("outline-indigo-600");
  });

  it("calls the selected function when a color is clicked", async () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(<Default />);

    const colorButtons = screen.getAllByRole("button");
    const colorSwatch = colorButtons[1];

    await userEvent.click(colorSwatch);

    expect(consoleSpy).toHaveBeenCalledWith({ selectedColor: "brown" });
    consoleSpy.mockRestore();
  });
  it("calls the selected function when a color is clicked on Default story", async () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(<Default />);

    const colorButtons = screen.getAllByRole("button");
    const colorSwatch = colorButtons[1];

    await userEvent.click(colorSwatch);

    expect(consoleSpy).toHaveBeenCalledWith({ selectedColor: "brown" });
    consoleSpy.mockRestore();
  });

  it("calls the selected function when a color is clicked on Out of Stock story", async () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(<OutOfStock />);

    const colorButtons = screen.getAllByRole("button");
    const colorSwatch = colorButtons[1];

    await userEvent.click(colorSwatch);

    expect(consoleSpy).toHaveBeenCalledWith({ selectedColor: "brown" });
    consoleSpy.mockRestore();
  });

  it("calls the selected function when a color is clicked", async () => {
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
    await userEvent.click(colorSwatch);

    expect(mockSelected).toHaveBeenCalledWith({ selectedColor: "red" });
  });

  it("disables the out-of-stock color swatch", async () => {
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
    await userEvent.click(colorSwatch);
    expect(mockSelected).toHaveBeenCalledWith({ selectedColor: "green" });
    expect(outOfStockLine).toBeInTheDocument();
  });
});
