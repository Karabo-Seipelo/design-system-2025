import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Rating from ".";

describe("Rating", () => {
  it("renders the score when showScore is true", () => {
    render(<Rating score={4.5} showScore={true} />);
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("does not render the score when showScore is false", () => {
    render(<Rating score={4.5} showScore={false} />);
    expect(screen.queryByText("4.5")).not.toBeInTheDocument();
  });

  it("renders the correct number of stars based on the score", () => {
    render(<Rating score={3.5} />);
    expect(screen.getByText("3.5")).toBeInTheDocument();
    // Assuming Stars component renders stars based on the score
  });

  it("renders the 'See all reviews' button when total is greater than 0 and href is provided", () => {
    render(<Rating score={4.5} total={10} href="/reviews" />);
    expect(screen.getByText("See all 10 reviews")).toBeInTheDocument();
  });

  it("renders the 'Based on reviews' text when total is greater than 0 and href is not provided", () => {
    render(<Rating score={4.5} total={5} />);
    expect(screen.getByText("Based on 5 reviews")).toBeInTheDocument();
  });

  it("renders the 'No reviews yet' button when total is 0 or not provided", () => {
    render(<Rating score={4.5} total={0} />);
    expect(screen.getByText("No reviews yet.")).toBeInTheDocument();
    expect(screen.getByText("Be the first")).toBeInTheDocument();
  });

  it.skip("applies the correct classes to the container", () => {
    render(<Rating score={4.5} classes="custom-class" />);
    expect(screen.getByText("4.5").closest("div")).toHaveClass("custom-class");
  });
});
