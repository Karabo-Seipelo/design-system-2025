import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from ".";

describe("Badge", () => {
  it("renders with default variant", () => {
    render(<Badge discount={20} />);
    const badge = screen.getByText(/20% off/i);
    expect(badge).toBeInTheDocument();
  });

  it("renders with promo variant", () => {
    render(<Badge discount={30} variant="promo" />);
    const badge = screen.getByText(/30% off/i);
    expect(badge).toBeInTheDocument();
  });
});
