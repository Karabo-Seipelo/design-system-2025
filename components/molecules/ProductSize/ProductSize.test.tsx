import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ProductSize.stories";
const { Default, OutOfStock, Numbers } = composeStories(stories);
import ProductSize from ".";

describe("ProductSize", () => {
  let mockInventory = {
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
  let mockSelected = jest.fn();

  it("renders the ProductSize component with available sizes", () => {
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

  it("renders the component without classes", () => {
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

  it("handles button click and sets active size", () => {
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

  it("renders the OutOfStock story correctly", () => {
    render(<OutOfStock />);
    expect(screen.getByText("Available Sizes")).toBeInTheDocument();
    expect(screen.getByLabelText("Select size 7")).toBeInTheDocument();
  });

  it("renders the OutOfStock and handles the button click for disabled button", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<OutOfStock />);
    const disabledButton = screen.getAllByRole("button")[6];
    const button = screen.getAllByRole("button")[0];
    userEvent.click(disabledButton);
    expect(disabledButton).toBeDisabled();
    expect(mockSelected).not.toHaveBeenCalledWith();
    expect(consoleSpy).not.toHaveBeenCalled();

    userEvent.click(button);
    expect(button).not.toBeDisabled();
    // expect(mockSelected).toHaveBeenCalled();
    // expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
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
});
