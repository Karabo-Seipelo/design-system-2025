import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductOptions from ".";

describe("ProductOptions", () => {
  const mockSelected = jest.fn();
  const mockInventory = {
    color: "red",
    stock: 10,
  };
  const mockOutOfStock = ["blue"];
  const mockUnavailableSizes = { red: [42] };

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === "(max-width: 768px)",
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterAll(() => {
    window.matchMedia.mockRestore();
  });

  it("renders all child components correctly", () => {
    render(
      <ProductOptions
        colors={["red", "blue"]}
        sizes={[40, 42, 44]}
        quantity={1}
        selected={mockSelected}
        inventory={mockInventory}
        outOfStock={mockOutOfStock}
        unavailableSizes={mockUnavailableSizes}
      />,
    );

    // expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });

  it("disables the Add to cart button when the item is out of stock", () => {
    render(
      <ProductOptions
        colors={["red", "blue"]}
        sizes={[40, 42, 44]}
        quantity={1}
        selected={mockSelected}
        inventory={{ color: "blue", stock: 0 }}
        outOfStock={mockOutOfStock}
        unavailableSizes={mockUnavailableSizes}
      />,
    );

    expect(screen.getByText("Add to cart")).toBeDisabled();
    expect(
      screen.getByText("Sorry, this item is out of stock"),
    ).toBeInTheDocument();
  });

  it("enables the Add to cart button when the item is in stock", () => {
    render(
      <ProductOptions
        colors={["red", "blue"]}
        sizes={[40, 42, 44]}
        quantity={1}
        selected={mockSelected}
        inventory={mockInventory}
        outOfStock={mockOutOfStock}
        unavailableSizes={mockUnavailableSizes}
      />,
    );

    expect(screen.getByText("Add to cart")).not.toBeDisabled();
  });
});
