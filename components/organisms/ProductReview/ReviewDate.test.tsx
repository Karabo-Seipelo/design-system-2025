import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewDate from "./ReviewDate";

describe("ReviewDate Component", () => {
  it("renders the formatted date correctly", () => {
    render(<ReviewDate date="2025-12-25" classes="test-class" />);
    const dateElement = screen.getByText("December 25, 2025");
    expect(dateElement).toBeInTheDocument();
  });

  it("applies the provided CSS classes", () => {
    render(<ReviewDate date="2025-12-25" classes="test-class" />);
    const dateElement = screen.getByText("December 25, 2025");
    expect(dateElement).toHaveClass("test-class");
  });

  it("formats dates with different months correctly", () => {
    render(<ReviewDate date="2025-01-15" classes="test-class" />);
    const dateElement = screen.getByText("January 15, 2025");
    expect(dateElement).toBeInTheDocument();
  });
});
