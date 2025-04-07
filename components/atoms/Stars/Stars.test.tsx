import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stars from ".";

describe("Stars", () => {
  it("renders the given score", () => {
    render(<Stars score={3.5} />);
    expect(screen.getByLabelText("Rating: 3.5 out of 5")).toBeInTheDocument();
  });

  it("renders the correct number of full stars for an integer score", () => {
    render(<Stars score={3} />);
    const starRating = screen.getByTestId("star-rating");
    expect(starRating).toBeInTheDocument();
    expect(
      starRating.querySelectorAll(".ri-star-fill.text-yellow-400").length,
    ).toBe(3);
    expect(
      starRating.querySelectorAll(".ri-star-fill.text-slate-300").length,
    ).toBe(2);
  });

  it("renders all empty stars when the score is 0", () => {
    render(<Stars score={0} />);
    const starRating = screen.getByTestId("star-rating");
    expect(starRating).toBeInTheDocument();
    expect(
      starRating.querySelectorAll(".ri-star-fill.text-yellow-400").length,
    ).toBe(0);
    expect(
      starRating.querySelectorAll(".ri-star-fill.text-slate-300").length,
    ).toBe(5);
  });
});
