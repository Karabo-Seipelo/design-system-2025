import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OverallRating from "./OverallRating";

describe("OverallRating Component", () => {
  const mockCounts = [
    { rating: 5, count: 50 },
    { rating: 4, count: 30 },
    { rating: 3, count: 15 },
    { rating: 2, count: 5 },
    { rating: 1, count: 0 },
  ];

  const mockApplyFilter = jest.fn();
  const mockClearFilter = jest.fn();

  it("renders the title when provided", () => {
    render(
      <OverallRating
        title="Customer Reviews"
        rating={4.5}
        total={100}
        counts={mockCounts}
        filter={null}
        applyFilter={mockApplyFilter}
        clearFilter={mockClearFilter}
      />,
    );
    expect(screen.getByText("Customer Reviews")).toBeInTheDocument();
  });

  it("renders the sorted counts with correct percentages", () => {
    render(
      <OverallRating
        title="Customer Reviews"
        rating={4.5}
        total={100}
        counts={mockCounts}
        filter={null}
        applyFilter={mockApplyFilter}
        clearFilter={mockClearFilter}
      />,
    );

    expect(screen.getByText("Excellent")).toBeInTheDocument();
    expect(screen.getByText("50 %")).toBeInTheDocument();

    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.getByText("30 %")).toBeInTheDocument();

    expect(screen.getByText("Average")).toBeInTheDocument();
    expect(screen.getByText("15 %")).toBeInTheDocument();

    expect(screen.getByText("Below Average")).toBeInTheDocument();
    expect(screen.getByText("5 %")).toBeInTheDocument();

    expect(screen.getByText("Poor")).toBeInTheDocument();
    expect(screen.getByText("0 %")).toBeInTheDocument();
  });

  it("applies the filter when a rating button is clicked", () => {
    render(
      <OverallRating
        title="Customer Reviews"
        rating={4.5}
        total={100}
        counts={mockCounts}
        filter={null}
        applyFilter={mockApplyFilter}
        clearFilter={mockClearFilter}
      />,
    );

    const excellentButton = screen.getByText("Excellent");
    excellentButton.click();
    expect(mockApplyFilter).toHaveBeenCalledWith(5);
  });

  it("renders the clear filter button when a filter is applied", () => {
    render(
      <OverallRating
        title="Customer Reviews"
        rating={4.5}
        total={100}
        counts={mockCounts}
        filter={5}
        applyFilter={mockApplyFilter}
        clearFilter={mockClearFilter}
      />,
    );

    const clearFilterButton = screen.getByText("Clear Filter");
    expect(clearFilterButton).toBeInTheDocument();
    clearFilterButton.click();
    expect(mockClearFilter).toHaveBeenCalled();
  });

  it("renders the 'Write a review' button", () => {
    render(
      <OverallRating
        title="Customer Reviews"
        rating={4.5}
        total={100}
        counts={mockCounts}
        filter={null}
        applyFilter={mockApplyFilter}
        clearFilter={mockClearFilter}
      />,
    );

    const writeReviewButton = screen.getByText("Write a review");
    expect(writeReviewButton).toBeInTheDocument();
  });
});
