import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductDetail.stories";
const { Default, Discount } = composeStories(stories);
import ProductDetail from ".";

describe("ProductDetail", () => {
  const mockInventory = {
    sku: "vh-green-xl",
    color: "green",
    size: "xl",
    list_price: 100,
    sale_price: 80,
    discount: null,
    discount_percentage: 20,
    sold: 65,
    stock: 435,
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

  it("renders the Default story correctly", () => {
    render(<Default />);
    expect(screen.getByText("Voyager Hoodie")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the Discount story correctly", () => {
    render(<Discount />);
    expect(screen.getByText("Voyager Hoodie")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.",
      ),
    ).toBeInTheDocument();
  });
});
