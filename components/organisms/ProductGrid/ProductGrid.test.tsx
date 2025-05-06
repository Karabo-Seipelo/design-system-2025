import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { composeStories } from "@storybook/react";
import {
  mockProducts,
  mockUseProductsStore,
  setMockUseProductsStore,
} from "./ProductGrid.mocks";

jest.mock("./useProductsStore", () => mockUseProductsStore);

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    return <img {...props} />;
  },
}));

import ProductGrid from ".";
import * as stories from "./ProductGrid.stories";
const { Default } = composeStories(stories);

const TEST_IDS = {
  loading: "loading",
  error: "error",
  productGrid: "product-grid",
  noProductsMessage: "No products found",
  colorSwatchBlue: "color-swatch-blue",
};

describe("ProductGrid Component", () => {
  describe("when rendering the component with loading state", () => {
    it("should render loading state", () => {
      render(<ProductGrid />);
      const loadingState = screen.getByTestId(TEST_IDS.loading);
      expect(loadingState).toBeInTheDocument();
    });
  });

  describe("when rendering the component with error state", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: new Error("Failed to fetch products"),
      });
    });
    it("should render error state", () => {
      render(<ProductGrid />);
      const errorState = screen.getByTestId(TEST_IDS.error);
      expect(errorState).toBeInTheDocument();
    });
  });

  describe("when rendering the component with no products", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: null,
        products: [],
      });
    });

    it("should render no products message", () => {
      render(<ProductGrid />);
      const noProductsMessage = screen.getByText(TEST_IDS.noProductsMessage);
      expect(noProductsMessage).toBeInTheDocument();
    });
  });

  describe("when rendering the component with products", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: null,
        products: mockProducts,
      });
    });

    it("should render product grid with products", () => {
      render(<ProductGrid />);
      const productGrid = screen.getByTestId("product-grid");
      expect(productGrid).toBeInTheDocument();
    });

    it("should update selected color and image when color is clicked", async () => {
      render(<ProductGrid />);
      const initialImage = screen.getByAltText("Product 1 - red");
      expect(initialImage).toHaveAttribute("src", "image1.jpg");

      const blueButton = screen.getByTestId(TEST_IDS.colorSwatchBlue);

      expect(blueButton).toBeDefined();

      if (blueButton) {
        await userEvent.click(blueButton);
        expect(initialImage).toHaveAttribute("src", "image2.jpg");
      }
    });
  });

  // write a describe block for the Default story
  describe("Default Story", () => {
    it("should render the Default story", () => {
      render(<Default />);
      const productGrid = screen.getByTestId(TEST_IDS.productGrid);
      expect(productGrid).toBeInTheDocument();
    });
  });
});
