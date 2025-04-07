import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from ".";

describe("ProductDetails", () => {
  it("does not render components when product data is incomplete", () => {
    const mockUseProductStore = jest.fn(() => ({
      product: { images: [], name: "", description: "", rating: 0, reviews: 0 },
      loading: false,
      selectedQuantity: 1,
      updateState: jest.fn(),
      fetchProductDetails: jest.fn(),
      selectedInventory: null,
      selectedColor: null,
      unavailableSizes: [],
      outOfStock: false,
      error: null,
    }));
    jest.mock("./useProductStore", () => mockUseProductStore);

    render(<ProductDetails productId="1" locale="en-US" currency="USD" />);

    expect(screen.queryByText(/product/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/options/i)).not.toBeInTheDocument();
  });
});
