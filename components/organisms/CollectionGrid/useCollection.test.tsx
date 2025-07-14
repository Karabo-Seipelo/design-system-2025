import { renderHook, waitFor } from "@testing-library/react";
import useCollection from "./useCollection";
import fetchCollectionAPI from "./fetchCollectionAPI";
import { Collection } from "$/molecules/card/product/interfaces";

jest.mock("./fetchCollectionAPI", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockFetchCollectionAPI = fetchCollectionAPI as jest.MockedFunction<
  typeof fetchCollectionAPI
>;

describe("useCollection Hook", () => {
  const mockCollection: Collection[] = [
    {
      collectionId: "1",
      image_url: "/image1.jpg",
      name: "Test Collection 1",
      description: "Test description 1",
    },
    {
      collectionId: "2",
      image_url: "/image2.jpg",
      name: "Test Collection 2",
      description: "Test description 2",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    mockFetchCollectionAPI.mockClear();
  });

  it("should return null initially", () => {
    mockFetchCollectionAPI.mockImplementation(() => new Promise(() => {})); // Never resolves

    const { result } = renderHook(() => useCollection());

    expect(result.current.collection).toBeNull();
  });

  it("should fetch and return collection data", async () => {
    mockFetchCollectionAPI.mockResolvedValue(mockCollection);

    const { result } = renderHook(() => useCollection());

    await waitFor(() => {
      expect(result.current.collection).toEqual(mockCollection);
    });

    expect(mockFetchCollectionAPI).toHaveBeenCalledTimes(1);
  });

  it("should handle API errors gracefully", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    mockFetchCollectionAPI.mockRejectedValue(new Error("API Error"));

    const { result } = renderHook(() => useCollection());

    await waitFor(() => {
      expect(result.current.collection).toBeNull();
    });

    expect(mockFetchCollectionAPI).toHaveBeenCalledTimes(1);
    consoleErrorSpy.mockRestore();
  });

  it("should cleanup on unmount", () => {
    mockFetchCollectionAPI.mockImplementation(() => new Promise(() => {}));

    const { unmount } = renderHook(() => useCollection());

    unmount();

    expect(mockFetchCollectionAPI).toHaveBeenCalledTimes(1);
  });

  it("should prevent race conditions with ignore flag", async () => {
    let resolveFirst: ((value: Collection[]) => void) | undefined;

    const firstPromise = new Promise<Collection[]>((resolve) => {
      resolveFirst = resolve;
    });

    mockFetchCollectionAPI.mockImplementationOnce(() => firstPromise);

    const { unmount } = renderHook(() => useCollection());

    unmount();

    resolveFirst?.(mockCollection);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(mockFetchCollectionAPI).toHaveBeenCalledTimes(1);
  });

  it("should return empty array when API returns empty array", async () => {
    mockFetchCollectionAPI.mockResolvedValue([]);

    const { result } = renderHook(() => useCollection());

    await waitFor(() => {
      expect(result.current.collection).toEqual([]);
    });

    expect(mockFetchCollectionAPI).toHaveBeenCalledTimes(1);
  });
});
