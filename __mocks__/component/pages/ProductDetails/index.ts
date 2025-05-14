import * as useProductStoreModule from "../../../../components/organisms/ProductDetails/useProductStore";

export const mockProduct = {
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

export const mockProductDetails = {
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
  selectedInventory: {
    ...mockProduct.inventory[0],
  },
  outOfStock: ["red"],
};

export const mockUseProductStore = (
  state: Partial<ReturnType<typeof useProductStoreModule.default>>,
) => {
  jest.spyOn(useProductStoreModule, "default").mockReturnValue({
    product: null,
    loading: false,
    error: null,
    selectedQuantity: null,
    updateState: jest.fn(),
    fetchProductDetails: jest.fn(),
    selectedInventory: null,
    selectedColor: "green",
    unavailableSizes: [],
    outOfStock: [],
    ...state,
  });
};
