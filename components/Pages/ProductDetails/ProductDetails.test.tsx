import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductDetails.stories";
const { Default } = composeStories(stories);

const mockProduct = {
  product_Id: "12345",
  name: "Voyager Hoodie",
  description: "A warm and cozy hoodie for your adventures.",
  category: {
    category_id: "unisex",
    name: "Unisex",
    created_at: "2023-10-01T12:00:00Z",
  },
  collection: {
    collection_id: "urban",
    name: "Urban Oasis",
    description: "A collection of urban-inspired clothing.",
    image_url: "https://example.com/urban.jpg",
    created_at: "2023-10-01T12:00:00Z",
  },
  created_at: "2023-10-01T12:00:00Z",
  colors: ["green", "brown"],
  images: [
    {
      color: "green",
      url: "https://example.com/image1.jpg",
    },
    {
      color: "brown",
      url: "https://example.com/image2.jpg",
    },
  ],
  info: [
    {
      title: "Features",
      description: [
        "Designed for comfort and durability.",
        "Soft, breathable fabric ideal for travel and adventure.",
        "Large front pocket and adjustable hood.",
        "Minimalist design pairs well with any style.",
        "Made with eco-conscious materials.",
      ],
    },
    {
      title: "Fabric & Care",
      description: [
        "Machine wash cold on a gentle cycle.",
        "Tumble dry low or hang to dry.",
        "Do not use fabric softeners or bleach.",
        "Iron on a low setting if necessary.",
      ],
    },
    {
      title: "Shipping",
      description: [
        "Free shipping on orders over $50.",
        "Standard shipping within 5-7 business days.",
        "Express shipping available at checkout.",
        "International shipping options available.",
      ],
    },
  ],
  inventory: [
    {
      sku: "vh-green-xs",
      color: "green",
      size: "xs",
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 85,
      stock: 415,
    },
    {
      sku: "vh-green-sm",
      color: "green",
      size: "sm",
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 80,
      stock: 420,
    },
    {
      sku: "vh-brown-xs",
      color: "brown",
      size: "xs",
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 85,
      stock: 415,
    },
    {
      sku: "vh-brown-md",
      color: "brown",
      size: "md",
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 75,
      stock: 425,
    },
  ],
  priceRange: {
    highest: 76,
    lowest: 76,
  },
  rating: 4.5,
  reviews: 120,
  size: ["xs", "sm", "lg", "xl"],
  sold: 750,
};

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

jest.mock("../../organisms/ProductDetails/useProductStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    product: {
      images: mockProduct.images,
      name: mockProduct.name,
      description: mockProduct.description,
      rating: mockProduct.rating,
      reviews: mockProduct.reviews,
      colors: mockProduct.colors,
      sizes: mockProduct.size,
      info: mockProduct.info,
    },
    loading: false,
    selectedQuantity: 1,
    updateState: jest.fn(),
    fetchProductDetails: jest.fn(),
    selectedInventory: {
      ...mockProduct.inventory[0],
    },
    selectedColor: "green",
    unavailableSizes: [],
    outOfStock: ["red"],
    error: null,
  })),
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

describe("ProductDetails Component", () => {
  describe("When the user visits the product details page", () => {
    it("should display the navigation bar", () => {
      render(<Default />);
      const navigation = screen.getByTestId("navigation");
      expect(navigation).toBeInTheDocument();
    });

    it("should display the product details section", () => {
      render(<Default />);
      const productDetails = screen.getByTestId("product-detail");
      expect(productDetails).toBeInTheDocument();
    });

    it("should display the product specification section", () => {
      render(<Default />);
      const productSpecifications = screen.getByTestId(
        "product-specifications",
      );
      expect(productSpecifications).toBeInTheDocument();
    });

    it("should display the product grid of the given collection", () => {
      render(<Default />);
      const productGrid = screen.getByTestId("product-grid");
      expect(productGrid).toBeInTheDocument();
    });

    it("should display the footer", () => {
      render(<Default />);
      const footer = screen.getByTestId("footer-multicolumn");
      expect(footer).toBeInTheDocument();
    });
  });
});
