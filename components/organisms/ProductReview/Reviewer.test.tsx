import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reviewer from "./Reviewer";

describe("Reviewer Component", () => {
  const mockReview = {
    rating: 4,
    created_at: "2023-01-01",
    content: "This is a great product!",
    user: {
      name: "John Doe",
      avatar_url: "/path/to/avatar.jpg",
    },
  };

  it("renders the user's name", () => {
    render(<Reviewer review={mockReview} />);
    const userName = screen.getByText("John Doe");
    expect(userName).toBeInTheDocument();
  });

  it("renders the review content", () => {
    render(<Reviewer review={mockReview} />);
    const content = screen.getByText("This is a great product!");
    expect(content).toBeInTheDocument();
  });
});
