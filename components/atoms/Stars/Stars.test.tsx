import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stars from ".";

describe("Stars", () => {
  it("renders the given score", () => {
    render(<Stars score={3.5} />);
    expect(screen.getByLabelText("Rating: 3.5 out of 5")).toBeInTheDocument();
  });
});
