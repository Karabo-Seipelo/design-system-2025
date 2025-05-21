/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductDetails.stories";
const { Default } = composeStories(stories);
import {
  mockUseProductStore,
  mockProductDetails,
} from "../../../__mocks__/component/pages/ProductDetails";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

jest.mock("../../organisms/ProductGrid/useProductsStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    products: [],
    fetchProducts: jest.fn(),
    loading: false,
    error: null,
  })),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

describe("Product Details Page", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("Display the navigation Bar", () => {
    beforeEach(() => {
      mockUseProductStore(mockProductDetails);
    });

    it("Given the navigation bar is rendered, Then it should be in the document", () => {
      render(<Default />);
      const navigation = screen.getByTestId("navigation");
      expect(navigation).toBeInTheDocument();
    });

    it("Given the navigation bar is rendered, Then it should display key links", () => {
      render(<Default />);
      const navigation = screen.getByTestId("navigation");
      const links = navigation.querySelectorAll("a");
      expect(links.length).toBe(3);
      expect(links[0]).toHaveTextContent("StyleNest");
      expect(links[1]).toHaveTextContent("Shop all");
      expect(links[2]).toHaveTextContent("Latest arrivals");
    });
  });

  describe("When the product details are being fetched", () => {
    beforeEach(() => {
      mockUseProductStore({ ...mockProductDetails, loading: true });
    });
    it("Then the product details skeleton should be displayed", () => {
      render(<Default />);
      const productDetailsSkeleton = screen.getByTestId(
        "product-detail-loading",
      );
      expect(productDetailsSkeleton).toBeInTheDocument();
    });
  });

  describe("When the product details are successfully fetched", () => {
    beforeEach(() => {
      mockUseProductStore(mockProductDetails);
    });
    it("Then the product details section should be displayed", () => {
      render(<Default />);
      const productDetails = screen.getByTestId("page");
      expect(productDetails).toBeInTheDocument();
    });

    describe("Handling missing product images", () => {
      it("Given the product has no images, then the product details section should still be displayed", () => {
        mockUseProductStore({
          ...mockProductDetails,
          product: {
            ...mockProductDetails.product,
            images: [],
          },
        });

        render(<Default />);
        const productDetails = screen.getByTestId("product-detail");
        expect(productDetails).toBeInTheDocument();
      });
    });

    describe("Handling missing sizes and color", () => {
      it("Given the product has no sizes, then the product details section should still be displayed", () => {
        mockUseProductStore({
          ...mockProductDetails,
          product: {
            ...mockProductDetails.product,
            sizes: null,
          },
        });

        render(<Default />);
        const productDetails = screen.getByTestId("product-detail");
        expect(productDetails).toBeInTheDocument();
      });

      it("Given the product has no colors, then the product details section should still be displayed", () => {
        mockUseProductStore({
          ...mockProductDetails,
          product: {
            ...mockProductDetails.product,
            colors: null,
          },
        });

        render(<Default />);
        const productDetails = screen.getByTestId("product-detail");
        expect(productDetails).toBeInTheDocument();
      });
    });
  });

  describe("When the product details are not fetched", () => {
    it("should display a fallback error message for null errors", () => {
      mockUseProductStore({
        loading: false,
        error: "Error fetching product details",
      });

      render(<Default />);
      const errorMessage = screen.getByText(
        "Something went wrong. Please try again later.",
      );
      expect(errorMessage).toBeInTheDocument();
    });

    it("should display a fallback error message", () => {
      mockUseProductStore({
        loading: false,
        error: new Error("Error fetching product details"),
      });

      render(<Default />);
      const errorMessage = screen.getByText("Error fetching product details");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
