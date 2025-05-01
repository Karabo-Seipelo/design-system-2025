import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Price from "./index";

jest.mock("$/atoms/Badge", () => {
  const MockBadge = () => <p>Mock Badge</p>;
  MockBadge.displayName = "MockBadge";
  return MockBadge;
});

describe("Price", () => {
  it("renders with default variant", () => {
    render(
      <Price
        listPrice={100}
        salePrice={80}
        discount_percentage={null}
        currency="USD"
        locale="en-US"
      />,
    );
    const price = screen.getByText(/100/i);
    expect(price).toBeInTheDocument();
  });

  it("renders with sale price and discount percentage", () => {
    render(
      <Price
        listPrice={100}
        salePrice={80}
        discount_percentage={20}
        currency="USD"
        locale="en-US"
      />,
    );
    const salePrice = screen.getByText(/80/i);
    const originalPrice = screen.getByText(/100/i);
    const discountBadge = screen.getByText(/Mock Badge/i);
    expect(salePrice).toBeInTheDocument();
    expect(originalPrice).toBeInTheDocument();
    expect(discountBadge).toBeInTheDocument();
  });
});
