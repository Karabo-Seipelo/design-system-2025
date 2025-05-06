import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ProductsStore } from "./useProductsStore";

const mockUseProductsStore = jest.fn(
  (): ProductsStore => ({
    products: [],
    fetchProducts: jest.fn(),
    loading: true,
    error: null,
    page: 1,
    perPage: 10,
    hasMore: false,
    collection: undefined,
    sort: undefined,
    direction: undefined,
  }),
);

const setMockUseProductsStore = (overrides: Partial<ProductsStore>) => {
  mockUseProductsStore.mockReturnValue({
    ...mockUseProductsStore(),
    ...overrides,
  });
};

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

describe("ProductGrid Component", () => {
  describe("when rendering the component with loading state", () => {
    it("should render loading state", () => {
      render(<ProductGrid />);
      const loadingState = screen.getByTestId("loading");
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
      const errorState = screen.getByTestId("error");
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
      const noProductsMessage = screen.getByText("No products found");
      expect(noProductsMessage).toBeInTheDocument();
    });
  });

  describe("when rendering the component with products", () => {
    beforeEach(() => {
      setMockUseProductsStore({
        loading: false,
        error: null,
        products: [
          {
            product_id: "1",
            name: "Product 1",
            description: "Description 1",
            category: {
              category_id: "1",
              name: "Category 1",
              created_at: "2023-01-01",
            },
            collection: {
              collection_id: "1",
              name: "Collection 1",
              description: "Description 1",
              image_url: "collection.jpg",
              created_at: "2023-01-01",
            },
            colors: ["blue", "red"],
            images: [
              {
                color: "red",
                image_url: "image1.jpg",
              },
              {
                color: "blue",
                image_url: "image2.jpg",
              },
            ],
            inventory: [
              {
                sku: "sku1",
                color: "red",
                size: null,
                list_price: 100,
                discount: null,
                discount_percentage: null,
                sale_price: 90,
                sold: 5,
                stock: 10,
              },
            ],
            priceRange: {
              highest: 100,
              lowest: 90,
            },
            rating: 4.5,
            reviews: 10,
            sizes: ["s", "m", "l"],
            sold: 5,
            created_at: "",
          },
          {
            product_id: "2",
            name: "Product 2",
            description: "Description 2",
            category: {
              category_id: "2",
              name: "Category 2",
              created_at: "2023-02-01",
            },
            collection: {
              collection_id: "2",
              name: "Collection 2",
              description: "Description 2",
              image_url: "collection2.jpg",
              created_at: "2023-02-01",
            },
            colors: ["green", "yellow"],
            images: [
              {
                color: "green",
                image_url: "image3.jpg",
              },
              {
                color: "yellow",
                image_url: "image4.jpg",
              },
            ],
            inventory: [
              {
                sku: "sku2",
                color: "green",
                size: "m",
                list_price: 150,
                discount: 10,
                discount_percentage: 6.67,
                sale_price: 140,
                sold: 3,
                stock: 7,
              },
            ],
            priceRange: {
              highest: 150,
              lowest: 140,
            },
            rating: 4.0,
            reviews: 8,
            sizes: ["m", "l", "xl"],
            sold: 3,
            created_at: "",
          },
        ],
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

      const blueButton = screen.getByTestId("color-swatch-blue");

      expect(blueButton).toBeDefined();

      if (blueButton) {
        await userEvent.click(blueButton);
        expect(initialImage).toHaveAttribute("src", "image2.jpg");
      }
    });
  });
});
