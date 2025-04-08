import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reviews from "./Reviews";

describe("Reviews Component", () => {
  const mockHandler = jest.fn();
  const mockPagination = {
    total: 20,
    has_more: true,
    page: 1,
    per_page: 10,
  };

  const mockData = [
    {
      rating: 5,
      created_at: "2023-01-01",
      content: "Great product!",
      user: {
        user_id: "1",
        name: "John Doe",
        avatar_url: "/path/to/avatar.jpg",
      },
    },
    {
      rating: 4,
      created_at: "2023-01-02",
      content: "Good value for money.",
      user: {
        user_id: "2",
        name: "Jane Smith",
        avatar_url: "/path/to/avatar2.jpg",
      },
    },
  ];

  it("renders NoReviews component when data is empty and not loading", () => {
    render(
      <Reviews
        data={[]}
        pagination={mockPagination}
        handler={mockHandler}
        currentCount={0}
        loading={false}
      />,
    );
    expect(screen.getByText(/no reviews/i)).toBeInTheDocument();
  });

  it("renders Reviewer components for each review in data", () => {
    render(
      <Reviews
        data={mockData}
        pagination={mockPagination}
        handler={mockHandler}
        currentCount={2}
        loading={false}
      />,
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("does not render the 'Show more reviews' button when pagination has no more reviews", () => {
    render(
      <Reviews
        data={mockData}
        pagination={{ ...mockPagination, has_more: false }}
        handler={mockHandler}
        currentCount={2}
        loading={false}
      />,
    );
    expect(
      screen.queryByRole("button", { name: /show more reviews/i }),
    ).toBeNull();
  });
});
