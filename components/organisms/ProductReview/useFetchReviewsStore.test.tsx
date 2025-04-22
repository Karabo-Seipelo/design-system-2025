import { renderHook, act } from "@testing-library/react";
import useFetchReviewsStore from "./useFetchReviewsStore";
import fetchReviewsFromAPI from "./fetchReviewFromAPI";
import axios from "axios";

jest.mock("axios");
jest.mock("./fetchReviewFromAPI");

const mockedFetchReviewsFromAPI = fetchReviewsFromAPI as jest.MockedFunction<
  typeof fetchReviewsFromAPI
>;

describe("useFetchReviewsStore", () => {
  const mockReviewData = {
    aggregate: {
      counts: [
        { count: 10, rating: 5 },
        { count: 5, rating: 4 },
      ],
      rating: 4.5,
      total: 15,
    },
    data: [
      {
        rating: 5,
        content: "Great product!",
        created_at: "2023-01-01",
        user: {
          name: "John Doe",
          user_id: "user1",
          avatar_url: "avatar.jpg",
        },
      },
    ],
    pagination: {
      has_more: true,
      page: 1,
      per_page: 10,
      total: 20,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFetchReviewsStore());

    expect(result.current.reviews).toEqual({
      aggregate: {
        counts: [],
        rating: 0,
        total: 0,
      },
      data: [],
      pagination: {
        has_more: false,
        page: 1,
        per_page: 12,
        total: 0,
      },
    });
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.currentFilter).toBe(null);
  });

  it("should set loading to true when fetching reviews", async () => {
    const { result } = renderHook(() => useFetchReviewsStore());

    mockedFetchReviewsFromAPI.mockResolvedValueOnce(mockReviewData);

    act(() => {
      result.current.fetchReviews("productId");
    });

    await act(async () => {
      expect(result.current.loading).toBe(true);
      expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith(
        "productId",
        1,
        12,
        null,
      );
    });
  });

  it("should set loading to true when fetching reviews with filter", async () => {
    const { result } = renderHook(() => useFetchReviewsStore());
    mockedFetchReviewsFromAPI.mockResolvedValueOnce(mockReviewData);
    act(() => {
      result.current.fetchReviews("productId", 1, 12, 5);
    });

    await act(async () => {
      expect(result.current.loading).toBe(true);
      expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith(
        "productId",
        1,
        12,
        5,
      );
    });

    expect(result.current.currentFilter).toBe(5);

    act(() => {
      result.current.fetchReviews("productId", 1, 12, 6);
    });

    await act(async () => {
      expect(result.current.loading).toBe(true);
      expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith(
        "productId",
        1,
        12,
        6,
      );
    });
    expect(result.current.currentFilter).toBe(6);
  });

  it("should handle fetchReviews API failure with axios payload", async () => {
    const errorResponse = {
      response: {
        data: {
          message: "API Error",
        },
      },
    };

    mockedFetchReviewsFromAPI.mockRejectedValueOnce(
      errorResponse as unknown as Error,
    );

    jest.spyOn(axios, "isAxiosError").mockReturnValue(true);

    const { result } = renderHook(() => useFetchReviewsStore());

    await act(async () => {
      await result.current.fetchReviews("1");
    });

    expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith("1", 1, 12, null);
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetchReviews API failure with failed axios payload", async () => {
    mockedFetchReviewsFromAPI.mockRejectedValueOnce(
      new Error("API Error") as unknown as Error,
    );

    jest.spyOn(axios, "isAxiosError").mockReturnValue(true);

    const { result } = renderHook(() => useFetchReviewsStore());

    await act(async () => {
      await result.current.fetchReviews("1");
    });

    expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith("1", 1, 12, null);
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetchReviews API failure without axios payload", async () => {
    mockedFetchReviewsFromAPI.mockRejectedValueOnce(
      new Error("API Error") as unknown as Error,
    );

    jest.spyOn(axios, "isAxiosError").mockReturnValue(false);

    const { result } = renderHook(() => useFetchReviewsStore());

    await act(async () => {
      await result.current.fetchReviews("1");
    });

    expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith("1", 1, 12, null);
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetchReviews API failure when error fails without and Error instance", async () => {
    mockedFetchReviewsFromAPI.mockRejectedValueOnce("Network Error");

    jest.spyOn(axios, "isAxiosError").mockReturnValue(false);

    const { result } = renderHook(() => useFetchReviewsStore());

    await act(async () => {
      await result.current.fetchReviews("1");
    });

    expect(mockedFetchReviewsFromAPI).toHaveBeenCalledWith("1", 1, 12, null);
    expect(result.current.error).toEqual(new Error("Network Error"));
    expect(result.current.loading).toBe(false);
  });
});
