import { ProductsStore } from "./useProductsStore";

export interface Inventory {
  sku?: string;
  color?: string;
  size: string | number | null;
  list_price?: number;
  discount: number | null;
  discount_percentage: number | null;
  sale_price?: number;
  sold: number;
  stock?: number;
}

const baseCategory = {
  created_at: "2023-01-01",
};

const baseCollection = {
  description: "Description 1",
  image_url: "collection.jpg",
  created_at: "2023-01-01",
};

const baseInventory = {
  sku: "default-sku",
  color: "",
  size: null,
  list_price: 0,
  discount: null,
  discount_percentage: null,
  sale_price: 0,
  sold: 0,
  stock: 0,
};

const createInventory = (overrides: Partial<Inventory>) => ({
  ...baseInventory,
  ...overrides,
});

const createPriceRange = (highest: number, lowest: number) => ({
  highest,
  lowest,
});

export const mockProducts = [
  {
    product_id: "1",
    name: "Product 1",
    description: "Description 1",
    category: {
      ...baseCategory,
      category_id: "1",
      name: "Category 1",
    },
    collection: {
      ...baseCollection,
      collection_id: "1",
      name: "Collection 1",
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
      createInventory({
        sku: "sku1",
        color: "red",
        size: null,
        list_price: 100,
        stock: 10,
      }),
    ],
    priceRange: createPriceRange(100, 90),
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
      ...baseCategory,
      category_id: "2",
      name: "Category 2",
      created_at: "2023-02-01",
    },
    collection: {
      ...baseCollection,
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
      createInventory({
        sku: "sku2",
        color: "green",
        size: "m",
        list_price: 150,
        discount: 10,
        discount_percentage: 6.67,
        sale_price: 140,
        sold: 3,
        stock: 7,
      }),
    ],
    priceRange: createPriceRange(150, 140),
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
