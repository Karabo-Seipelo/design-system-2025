import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./Stars.stories";
const { Default, HalfStars, Empty, AllStates } = composeStories(stories);

describe("Stars", () => {
  it("renders all states", () => {
    render(<AllStates />);
    const allStates = screen.getByTestId("all-states");
    expect(allStates).toBeInTheDocument();
  });
  it("renders the given score", () => {
    render(<HalfStars />);
    expect(screen.getByLabelText("Rating: 3.5 out of 5")).toBeInTheDocument();
  });

  it("renders the correct number of full stars for an integer score", () => {
    render(<Default />);
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
    render(<Empty />);
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
