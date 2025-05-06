import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductSize.stories";
const { Default, OutOfStock, Numbers } = composeStories(stories);
import ProductSize from ".";

describe("ProductSize Component", () => {
  const mockInventory = {
    sku: "vh-red-xl",
    color: "red",
    size: "xl",
    list_price: 100,
    discount: null,
    discount_percentage: null,
    sale_price: 80,
    sold: 65,
    stock: 435,
  };
  const mockSelected = jest.fn();

  describe("when rendering with available sizes", () => {
    it("displays the available sizes with custom classes", () => {
      const mockUnavailableSizes = { red: ["M"] };

      render(
        <ProductSize
          name="size"
          sizes={["S", "M", "L"]}
          selected={mockSelected}
          classes="custom-class"
          inventory={mockInventory}
          outOfStock={["L"]}
          unavailableSizes={mockUnavailableSizes}
        />,
      );

      expect(screen.getByText("Available Sizes")).toBeInTheDocument();
      expect(screen.getByLabelText("Select size S")).toBeInTheDocument();
      expect(screen.getByLabelText("Select size M")).toBeInTheDocument();
      expect(screen.getByLabelText("Select size L")).toBeInTheDocument();
      expect(screen.getByTestId("Sizes")).toHaveClass("custom-class");
    });

    it("renders without custom classes when none are provided", () => {
      const mockUnavailableSizes = { red: ["M"] };

      render(
        <ProductSize
          name="size"
          sizes={["S", "M", "L"]}
          selected={mockSelected}
          inventory={mockInventory}
          outOfStock={["L"]}
          unavailableSizes={mockUnavailableSizes}
        />,
      );

      expect(screen.getByTestId("Sizes")).not.toHaveClass("custom-class");
    });
  });

  describe("when interacting with size buttons", () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });
    it("allows the user to select an available size", () => {
      const mockUnavailableSizes = { red: ["M"] };

      render(
        <ProductSize
          name="size"
          sizes={["S", "M", "L"]}
          selected={mockSelected}
          inventory={mockInventory}
          outOfStock={["L"]}
          unavailableSizes={mockUnavailableSizes}
        />,
      );

      const button = screen.getByLabelText("Select size S");
      button.click();

      expect(mockSelected).toHaveBeenCalledWith({ selectedSize: "S" });
    });

    it("does not allow the user to select an out-of-stock size", () => {
      render(<OutOfStock />);
      const disabledButton = screen.getAllByRole("button")[6];
      const button = screen.getAllByRole("button")[0];

      userEvent.click(disabledButton);
      expect(disabledButton).toBeDisabled();
      expect(mockSelected).not.toHaveBeenCalledWith();
      expect(consoleSpy).not.toHaveBeenCalled();

      userEvent.click(button);
      expect(button).not.toBeDisabled();
    });
  });

  describe("when rendering Storybook stories", () => {
    it("renders the OutOfStock story correctly", () => {
      render(<OutOfStock />);
      expect(screen.getByText("Available Sizes")).toBeInTheDocument();
      expect(screen.getByLabelText("Select size 7")).toBeInTheDocument();
    });

    it("renders the Numbers story correctly", () => {
      render(<Numbers />);
      expect(screen.getByText("Available Sizes")).toBeInTheDocument();
      expect(screen.getByLabelText("Select size 4")).toBeInTheDocument();
    });

    it("renders the Default story correctly", () => {
      render(<Default />);
      expect(screen.getByText("Available Sizes")).toBeInTheDocument();
      expect(screen.getByLabelText("Select size S")).toBeInTheDocument();
    });

    describe("when interacting with size buttons", () => {
      let consoleSpy: jest.SpyInstance;

      beforeEach(() => {
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      });

      afterEach(() => {
        consoleSpy.mockRestore();
      });

      it("allows the user to select an available size in the Default story", () => {
        render(<Default />);
        const button = screen.getAllByRole("button")[1];

        button.click();

        expect(consoleSpy).toHaveBeenCalledWith({ selectedSize: "S" });
      });

      it("allows the user to select an available size in the Numbers story", () => {
        render(<Numbers />);
        const button = screen.getAllByRole("button")[0];

        button.click();

        expect(button).toBeInTheDocument();
        expect(consoleSpy).toHaveBeenCalledWith({ selectedSize: 4 });
      });

      it("does not allow the user to select an out-of-stock size in the OutOfStock story", () => {
        render(<OutOfStock />);
        const disabledButton = screen.getAllByRole("button")[6];
        const button = screen.getAllByRole("button")[0];

        disabledButton.click();
        expect(disabledButton).toBeDisabled();
        expect(consoleSpy).not.toHaveBeenCalledWith();

        userEvent.click(button);
        expect(button).not.toBeDisabled();
        expect(consoleSpy).not.toHaveBeenCalled();
      });
    });
  });
});
