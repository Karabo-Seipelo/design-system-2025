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
  describe("Given the component is in a loading state", () => {
    it("Then it should display the loading state", () => {
      render(<ProductGrid title="Testing" />);
      const loadingState = screen.getByTestId(TEST_IDS.loading);
      expect(loadingState).toBeInTheDocument();
    });
  });

  describe("Given the component encounters an error", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: new Error("Failed to fetch products"),
      });
    });

    it("Then it should display the error state", () => {
      render(<ProductGrid title="Testing" />);
      const errorState = screen.getByTestId(TEST_IDS.error);
      expect(errorState).toBeInTheDocument();
    });
  });

  describe("Given there are no products available", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: null,
        products: [],
      });
    });

    it("Then it should display a message indicating no products are found", () => {
      render(<ProductGrid title="Testing" />);
      const noProductsMessage = screen.getByText(TEST_IDS.noProductsMessage);
      expect(noProductsMessage).toBeInTheDocument();
    });
  });

  describe("Given there are products available", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: null,
        products: mockProducts,
      });
    });

    it("Then it should display the product grid with products", () => {
      render(<ProductGrid title="Testing" label="label" />);
      const productGrid = screen.getByTestId(TEST_IDS.productGrid);
      expect(productGrid).toBeInTheDocument();
    });

    it("And when a color swatch is clicked, it should update the selected color and image", async () => {
      render(<ProductGrid title="Testing" />);
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

  describe("Given the Default story is rendered", () => {
    it("Then it should display the Default story correctly", () => {
      render(<Default />);
      const productGrid = screen.getByTestId(TEST_IDS.productGrid);
      expect(productGrid).toBeInTheDocument();
    });
  });

  describe("Given the component is rendered with a title", () => {
    it("Then it should display the title correctly", () => {
      render(<ProductGrid title="Product Grid Title" />);
      const titleElement = screen.getByText("Product Grid Title");
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("Given the component is rendered with a label", () => {
    it("Then it should display the label correctly", () => {
      render(<ProductGrid title="Testing" label="Product Label" />);
      const labelElement = screen.getByText("Product Label");
      expect(labelElement).toBeInTheDocument();
    });
  });
});
