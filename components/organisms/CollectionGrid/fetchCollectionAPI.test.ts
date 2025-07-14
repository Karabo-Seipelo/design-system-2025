import axios from "axios";
import fetchCollectionAPI from "./fetchCollectionAPI";
import { Collection } from "$/molecules/card/product/interfaces";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchCollectionAPI", () => {
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
  });

  it("should fetch collection data and return array when data is array", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockCollection });

    const result = await fetchCollectionAPI();

    expect(result).toEqual(mockCollection);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
    );
  });

  it("should fetch collection data and return data.data when data is object", async () => {
    mockedAxios.get.mockResolvedValue({
      data: { data: mockCollection },
    });

    const result = await fetchCollectionAPI();

    expect(result).toEqual(mockCollection);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
    );
  });

  it("should handle API errors", async () => {
    const errorMessage = "Network Error";
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchCollectionAPI()).rejects.toThrow(errorMessage);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
    );
  });

  it("should handle empty response", async () => {
    mockedAxios.get.mockResolvedValue({ data: [] });

    const result = await fetchCollectionAPI();

    expect(result).toEqual([]);
  });

  it("should handle nested empty response", async () => {
    mockedAxios.get.mockResolvedValue({
      data: { data: [] },
    });

    const result = await fetchCollectionAPI();

    expect(result).toEqual([]);
  });

  it("should use correct API endpoint", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockCollection });

    await fetchCollectionAPI();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
    );
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
