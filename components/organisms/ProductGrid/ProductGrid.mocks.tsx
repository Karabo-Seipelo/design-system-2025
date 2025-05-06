import { ProductsStore } from "./useProductsStore";

export const mockProducts = [
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
];

export const mockUseProductsStore = jest.fn(
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

export const setMockUseProductsStore = (overrides: Partial<ProductsStore>) => {
  mockUseProductsStore.mockReturnValue({
    ...mockUseProductsStore(),
    ...overrides,
  });
};
