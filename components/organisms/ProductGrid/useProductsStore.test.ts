import { renderHook, act } from "@testing-library/react";
import useProductsStore from "./useProductsStore";
import fetchProductsAPI from "./fetchProductsAPI";
import axios from "axios";

jest.mock("axios");
jest.mock("./fetchProductsAPI");

const mockedFetchProductsFromAPI = fetchProductsAPI as jest.MockedFunction<
  typeof fetchProductsAPI
>;

describe("useProductsStore", () => {
  const mockProductsData = {
    data: [
      {
        product_id: "urban-drift-bucket-hat",
        name: "Urban Drift Bucket Hat",
        description:
          "Navigate the urban jungle with our Urban Drift Bucket Hat. It's not only trendy but also practical, offering shade from the hustle and bustle.",
        category: {
          category_id: "unisex",
          name: "Unisex",
          created_at: "2024-01-01",
        },
        collection: {
          collection_id: "urban",
          name: "Urban Oasis",
          description: "For the city dwellers",
          image_url:
            "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg",
          created_at: "2024-01-01",
        },
        created_at: "2023-01-01",
        colors: ["black", "white"],
        images: [
          {
            color: "black",
            image_url:
              "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-1.jpg",
          },
          {
            color: "white",
            image_url:
              "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-7.jpg",
          },
        ],
        inventory: [
          {
            sku: "udbh-black",
            color: "black",
            size: null,
            list_price: 15,
            discount: null,
            discount_percentage: null,
            sale_price: 15,
            sold: 65,
            stock: 435,
          },
          {
            sku: "udbh-white",
            color: "white",
            size: null,
            list_price: 15,
            discount: null,
            discount_percentage: null,
            sale_price: 15,
            sold: 65,
            stock: 435,
          },
        ],
        priceRange: {
          highest: 15,
          lowest: 15,
        },
        rating: 4.5,
        reviews: 10,
        sizes: [],
        sold: 130,
      },
    ],
    pagination: {
      has_more: true,
      page: 1,
      per_page: 10,
      total: 100,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Initialization", () => {
    it("should initialize the store with default values when no actions are performed", () => {
      const { result } = renderHook(() => useProductsStore());
      expect(result.current.products).toEqual([]);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBeNull();
      expect(result.current.page).toBe(1);
      expect(result.current.perPage).toBe(10);
      expect(result.current.hasMore).toBe(false);
      expect(result.current.collection).toBeUndefined();
      expect(result.current.sort).toBeUndefined();
      expect(result.current.direction).toBeUndefined();
    });
  });

  describe("Fecting Products", () => {
    it("should load products successfully when the user fetches them", async () => {
      mockedFetchProductsFromAPI.mockResolvedValue(mockProductsData);
      const { result } = renderHook(() => useProductsStore());
      await act(async () => {
        await result.current.fetchProducts({ collection: "latest" });
      });
      expect(result.current.products).toEqual(mockProductsData.data);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.page).toBe(mockProductsData.pagination.page);
      expect(result.current.perPage).toBe(mockProductsData.pagination.per_page);
      expect(result.current.hasMore).toBe(mockProductsData.pagination.has_more);
      expect(result.current.collection).toBeUndefined();
      expect(result.current.sort).toBeUndefined();
      expect(result.current.direction).toBeUndefined();
    });
  });

  it("should load products with no collection when the user fetches them", async () => {
    mockedFetchProductsFromAPI.mockResolvedValue(mockProductsData);
    const { result } = renderHook(() => useProductsStore());
    await act(async () => {
      await result.current.fetchProducts();
    });
    expect(result.current.products).toEqual(mockProductsData.data);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.page).toBe(mockProductsData.pagination.page);
    expect(result.current.perPage).toBe(mockProductsData.pagination.per_page);
    expect(result.current.hasMore).toBe(mockProductsData.pagination.has_more);
    expect(result.current.collection).toBeUndefined();
    expect(result.current.sort).toBeUndefined();
    expect(result.current.direction).toBeUndefined();
  });

  describe("Error Handling", () => {
    it("should display an error when the API call fails", async () => {
      const errorMessage = "Network Error";
      mockedFetchProductsFromAPI.mockRejectedValue(new Error(errorMessage));
      const { result } = renderHook(() => useProductsStore());
      await act(async () => {
        await result.current.fetchProducts({ collection: "latest" });
      });

      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(new Error("Network Error"));
    });

    it("should handle axios-specific errors correctly", async () => {
      const errorResponse = {
        response: {
          data: {
            message: "Request failed with status code 404",
          },
        },
      };
      mockedFetchProductsFromAPI.mockRejectedValueOnce(
        errorResponse as unknown as Error,
      );
      jest.spyOn(axios, "isAxiosError").mockReturnValue(true);
      const { result } = renderHook(() => useProductsStore());
      await act(async () => {
        await result.current.fetchProducts({ collection: "latest" });
      });

      expect(mockedFetchProductsFromAPI).toHaveBeenCalledWith({
        page: 1,
        per_page: 10,
        collection: "latest",
        sort: undefined,
        direction: undefined,
      });
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(
        new Error("Request failed with status code 404"),
      );
    });

    it("should handle axios errors with failed payloads", async () => {
      mockedFetchProductsFromAPI.mockRejectedValueOnce(
        new Error("Request failed with status code 404"),
      );
      jest.spyOn(axios, "isAxiosError").mockReturnValue(true);
      const { result } = renderHook(() => useProductsStore());
      await act(async () => {
        await result.current.fetchProducts({ collection: "latest" });
      });

      expect(mockedFetchProductsFromAPI).toHaveBeenCalledWith({
        page: 1,
        per_page: 10,
        collection: "latest",
        sort: undefined,
        direction: undefined,
      });
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(
        new Error("Request failed with status code 404"),
      );
    });

    it("should handle non-axios errors gracefully", async () => {
      mockedFetchProductsFromAPI.mockRejectedValueOnce("Network Error");
      jest.spyOn(axios, "isAxiosError").mockReturnValue(false);
      const { result } = renderHook(() => useProductsStore());
      await act(async () => {
        await result.current.fetchProducts({ collection: "latest" });
      });

      expect(mockedFetchProductsFromAPI).toHaveBeenCalledWith({
        page: 1,
        per_page: 10,
        collection: "latest",
        sort: undefined,
        direction: undefined,
      });
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(new Error("Network Error"));
    });
  });
});
