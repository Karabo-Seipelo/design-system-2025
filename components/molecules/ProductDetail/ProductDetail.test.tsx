import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetail from ".";

describe("ProductDetail", () => {
  const mockInventory = {
    list_price: 100,
    sale_price: 80,
    discount_percentage: 20,
  };

  const defaultProps = {
    name: "Sample Product",
    description: "<p>This is a sample product description.</p>",
    rating: 4.5,
    reviews: 10,
    inventory: mockInventory,
    locale: "en-US",
    currency: "USD",
  };

  it("renders the product name", () => {
    render(<ProductDetail {...defaultProps} />);
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
  });

  it("renders the product description as HTML", () => {
    render(<ProductDetail {...defaultProps} />);
    expect(
      screen.getByText("This is a sample product description."),
    ).toBeInTheDocument();
  });

  it("renders the price and sale price correctly", () => {
    render(<ProductDetail {...defaultProps} />);
    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByText("$80.00")).toBeInTheDocument();
  });

  it("handles empty description gracefully", () => {
    const props = { ...defaultProps, description: "" };
    render(<ProductDetail {...props} />);
    expect(
      screen.queryByText("This is a sample product description."),
    ).not.toBeInTheDocument();
  });
});
