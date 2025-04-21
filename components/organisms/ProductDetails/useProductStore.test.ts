import { renderHook, act } from "@testing-library/react";
import useProductStore from "./useProductStore";
import fetchProductDetailsFromAPI from "./fetchProductDetailsAPI";
import axios from "axios";

jest.mock("axios");
jest.mock("./fetchProductDetailsAPI");

const mockedFetchProductDetailsFromAPI =
  fetchProductDetailsFromAPI as jest.MockedFunction<
    typeof fetchProductDetailsFromAPI
  >;

describe("useProductStore", () => {
  const mockProductData = {
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
    info: [
      {
        title: "Test Info",
        description: ["Info 1", "Info 2"],
      },
    ],
    price: 100,
    currenty: "ZAR",
    sizes: ["xs", "s", "m", "l", "xl"],
    inventory: [
      {
        sku: "sku1",
        color: "red",
        size: "s",
        list_price: 100,
        discount: null,
        discount_percentage: null,
        sale_price: 90,
        sold: 5,
        stock: 10,
      },
      {
        sku: "sku2",
        color: "red",
        size: "m",
        list_price: 100,
        discount: null,
        discount_percentage: null,
        sale_price: 90,
        sold: 5,
        stock: 0,
      },
      {
        sku: "sku3",
        color: "blue",
        size: "l",
        list_price: 100,
        discount: null,
        discount_percentage: null,
        sale_price: 90,
        sold: 5,
        stock: 5,
      },
    ],
    priceRange: {
      highest: 100,
      lowest: 50,
    },
    rating: 4.5,
    reviews: 10,
    sold: 5,
    tags: ["tag1", "tag2"],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with default state", () => {
    const { result } = renderHook(() => useProductStore());
    expect(result.current.product).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.selectedColor).toBeNull();
    expect(result.current.selectedSize).toBeNull();
    expect(result.current.selectedQuantity).toBe(1);
    expect(result.current.inventory).toBeNull();
    expect(result.current.selectedInventory).toBeNull();
    expect(result.current.unavailableSizes).toEqual({});
    expect(result.current.outOfStock).toEqual([]);
  });

  it("should update selectedColor, selectedSize, and selectedQuantity", () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.setColor("red");
    });
    expect(result.current.selectedColor).toBe("red");

    act(() => {
      result.current.setSize("M");
    });
    expect(result.current.selectedSize).toBe("M");

    act(() => {
      result.current.setQuantity(3);
    });
    expect(result.current.selectedQuantity).toBe(3);
  });

  it("should fetch product details successfully", async () => {
    mockedFetchProductDetailsFromAPI.mockResolvedValueOnce(mockProductData);

    const { result } = renderHook(() => useProductStore());

    await act(async () => {
      await result.current.fetchProductDetails("1");
    });

    expect(mockedFetchProductDetailsFromAPI).toHaveBeenCalledWith("1");
    expect(result.current.product).toEqual(mockProductData);
    expect(result.current.loading).toBe(false);
    expect(result.current.inventory).toEqual(mockProductData.inventory);
    expect(result.current.selectedColor).toBe("red");
    expect(result.current.selectedSize).toBe("s");
    expect(result.current.unavailableSizes).toEqual({ red: ["m"] });
    expect(result.current.outOfStock).toEqual([]);
  });

  it("should handle fetchProductDetails API failure with axios payload", async () => {
    const errorResponse = {
      response: {
        data: {
          message: "API Error",
        },
      },
    };
    mockedFetchProductDetailsFromAPI.mockRejectedValueOnce(
      errorResponse as unknown as Error
    );

    jest.spyOn(axios, "isAxiosError").mockReturnValue(true);

    const { result } = renderHook(() => useProductStore());

    await act(async () => {
      await result.current.fetchProductDetails("1");
    });

    expect(mockedFetchProductDetailsFromAPI).toHaveBeenCalledWith("1");
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetchProductDetails API failure with failed axios payload", async () => {
    mockedFetchProductDetailsFromAPI.mockRejectedValueOnce(
      new Error("API Error")
    );

    jest.spyOn(axios, "isAxiosError").mockReturnValue(true);

    const { result } = renderHook(() => useProductStore());

    await act(async () => {
      await result.current.fetchProductDetails("1");
    });

    expect(mockedFetchProductDetailsFromAPI).toHaveBeenCalledWith("1");
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetchProductDetails API failure without axios payload", async () => {
    mockedFetchProductDetailsFromAPI.mockRejectedValueOnce(
      new Error("API Error")
    );

    jest.spyOn(axios, "isAxiosError").mockReturnValue(false);

    const { result } = renderHook(() => useProductStore());

    await act(async () => {
      await result.current.fetchProductDetails("1");
    });

    expect(mockedFetchProductDetailsFromAPI).toHaveBeenCalledWith("1");
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetchProductDetails API failure when error fails without and Error instance", async () => {
    mockedFetchProductDetailsFromAPI.mockRejectedValueOnce("Network Error");

    jest.spyOn(axios, "isAxiosError").mockReturnValue(false);

    const { result } = renderHook(() => useProductStore());

    await act(async () => {
      await result.current.fetchProductDetails("1");
    });

    expect(mockedFetchProductDetailsFromAPI).toHaveBeenCalledWith("1");
    expect(result.current.error).toEqual(new Error("Network Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should get correct stock for a given color and size", () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.updateState({ inventory: mockProductData.inventory });
    });

    const stock = result.current.getStock("red", "s");
    expect(stock).toEqual({
      sku: "sku1",
      color: "red",
      size: "s",
      list_price: 100,
      discount: null,
      discount_percentage: null,
      sale_price: 90,
      sold: 5,
      stock: 10,
    });

    const outOfStock = result.current.getStock("red", "m");
    expect(outOfStock).toEqual({
      sku: "sku2",
      color: "red",
      size: "m",
      list_price: 100,
      discount: null,
      discount_percentage: null,
      sale_price: 90,
      sold: 5,
      stock: 0,
    });

    const noStock = result.current.getStock("green", "L");
    expect(noStock).toBeNull();
  });

  it("should update state with updateState function", () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.updateState({ selectedColor: "blue", selectedSize: "L" });
    });

    expect(result.current.selectedColor).toBe("blue");
    expect(result.current.selectedSize).toBe("L");
  });

  it("should update selectedInventory when selectedColor or selectedSize changes", () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.updateState({ inventory: mockProductData.inventory });
    });

    act(() => {
      result.current.setColor("blue");
      result.current.setSize("l");
    });

    expect(result.current.selectedInventory).toEqual({
      sku: "sku3",
      color: "blue",
      size: "l",
      list_price: 100,
      discount: null,
      discount_percentage: null,
      sale_price: 90,
      sold: 5,
      stock: 5,
    });
  });
});
