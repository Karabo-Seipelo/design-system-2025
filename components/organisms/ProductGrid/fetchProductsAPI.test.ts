import axios from "axios";
import fetchProductsAPI, {
  FetchProductArgs,
  FetchProductResponse,
} from "./fetchProductsAPI";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchProductsAPI", () => {
  const mockResponse: FetchProductResponse = {
    data: [
      {
        product_id: "1",
        name: "Test Product",
        description: "A test product description",
        category: {
          category_id: "1",
          name: "Test Category",
          created_at: "2023-01-01",
        },
        collection: {
          collection_id: "1",
          name: "Test Collection",
          description: "A test collection description",
          image_url: "collection.jpg",
          created_at: "2023-01-01",
        },
        created_at: "2023-01-01",
        colors: ["red", "blue"],
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
      },
    ],
    pagination: {
      page: 1,
      per_page: 10,
      has_more: false,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch products successfully", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });
    const args: FetchProductArgs = {
      page: 1,
      per_page: 10,
      collection: "test-collection",
      direction: "asc",
    };

    const result = await fetchProductsAPI(args);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products",
      { params: args },
    );
    expect(result).toEqual(mockResponse);
  });
});
