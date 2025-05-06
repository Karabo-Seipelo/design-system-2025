import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Price from "./index";

jest.mock("$/atoms/Badge", () => {
  const MockBadge = () => <p>Mock Badge</p>;
  MockBadge.displayName = "MockBadge";
  return MockBadge;
});

describe("Price Component", () => {
  describe("when no sale price or discount is provided", () => {
    it("renders with the default list price", () => {
      render(
        <Price
          listPrice={100}
          salePrice={null}
          discount_percentage={null}
          currency="USD"
          locale="en-US"
        />,
      );
      const price = screen.getByText(/100/i);
      expect(price).toBeInTheDocument();
    });
  });

  describe("when a sale price and discount percentage are provided", () => {
    it("renders the sale price, original price and discount badge", () => {
      render(<Price listPrice={100} salePrice={80} discount_percentage={20} />);
      const salePrice = screen.getByText(/80/i);
      const originalPrice = screen.getByText(/100/i);
      const discountBadge = screen.getByText(/Mock Badge/i);
      expect(salePrice).toBeInTheDocument();
      expect(originalPrice).toBeInTheDocument();
      expect(discountBadge).toBeInTheDocument();
    });
  });
});
