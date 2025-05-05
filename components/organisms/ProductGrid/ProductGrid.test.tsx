import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductGrid from ".";

describe("ProductGrid", () => {
  it.skip("renders the component", () => {
    render(<ProductGrid />);
    const productGrid = screen.getByText(/Loading../i);
    expect(productGrid).toBeInTheDocument();
  });
});
