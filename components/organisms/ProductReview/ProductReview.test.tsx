import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductReview from ".";

describe("ProductReview", () => {
  const mockClose = jest.fn();
  const mockFetchReviews = jest.fn();
  const mockUseFetchReviews = jest.fn(() => ({
    reviews: {
      aggregate: { averageRating: 4.5, totalReviews: 100 },
      data: [],
      pagination: { currentPage: 1, totalPages: 10 },
    },
    loading: false,
    error: null,
    fetchReviews: mockFetchReviews,
  }));

  jest.mock("./useFetchReviews", () => mockUseFetchReviews);

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === "(max-width: 768px)",
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the dialog when isOpen is true", () => {
    render(
      <ProductReview
        title="Test Product"
        isOpen={true}
        close={mockClose}
        productId="123"
      />,
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("does not render the dialog when isOpen is false", () => {
    render(
      <ProductReview
        title="Test Product"
        isOpen={false}
        close={mockClose}
        productId="123"
      />,
    );

    expect(screen.queryByText("Test Product")).not.toBeInTheDocument();
  });
});
