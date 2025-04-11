import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reviewer from "./NoReviews";

describe("NoReviews Component", () => {
  it("renders the no reviews message", () => {
    render(<Reviewer />);
    const message = screen.getByText("No reviews yet!");
    expect(message).toBeInTheDocument();
  });

  it("renders the prompt to be the first to review", () => {
    render(<Reviewer />);
    const prompt = screen.getByText("Be the first to review this product");
    expect(prompt).toBeInTheDocument();
  });
});
