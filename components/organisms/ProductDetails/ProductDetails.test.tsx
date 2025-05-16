import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from ".";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductDetails.stories";
const { Default } = composeStories(stories);

jest.mock("$/atoms/Artboard", () => {
  const MockArtboard = (props: React.PropsWithChildren) => (
    <div data-testid="artboard">{props.children}</div>
  );
  MockArtboard.displayName = "MockArtboard";
  return MockArtboard;
});

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

  it.skip("renders the component with default props", () => {
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

    render(<Default />);
    // const productName = screen.getByText(/voyager hoodie/i);
  });
});
