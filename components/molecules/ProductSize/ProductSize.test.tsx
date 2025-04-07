import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductSize from ".";

describe("ProductSize", () => {
  it("renders the ProductSize component with available sizes", () => {
    const mockSelected = jest.fn();
    const mockInventory = { color: "red" };
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
  });

  it.skip("disables sizes that are out of stock or unavailable", () => {
    const mockSelected = jest.fn();
    const mockInventory = { color: "red" };
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

    const sizeM = screen.getByLabelText("Select size M");
    const sizeL = screen.getByLabelText("Select size L");

    expect(sizeM).toHaveAttribute("aria-disabled", "true");
    expect(sizeL).toHaveAttribute("aria-disabled", "true");
  });

  it.skip("calls the selected function with the correct size when a size is clicked", () => {
    const mockSelected = jest.fn();
    const mockInventory = { color: "red" };
    const mockUnavailableSizes = { red: [] };

    render(
      <ProductSize
        name="size"
        sizes={["S", "M", "L"]}
        selected={mockSelected}
        classes="custom-class"
        inventory={mockInventory}
        outOfStock={[]}
        unavailableSizes={mockUnavailableSizes}
      />,
    );

    const sizeS = screen.getByLabelText("Select size S");
    fireEvent.click(sizeS);

    expect(mockSelected).toHaveBeenCalledWith({ selectedSize: "S" });
  });

  it.skip("sets the active size when a size is clicked", () => {
    const mockSelected = jest.fn();
    const mockInventory = { color: "red" };
    const mockUnavailableSizes = { red: [] };

    render(
      <ProductSize
        name="size"
        sizes={["S", "M", "L"]}
        selected={mockSelected}
        classes="custom-class"
        inventory={mockInventory}
        outOfStock={[]}
        unavailableSizes={mockUnavailableSizes}
      />,
    );

    const sizeM = screen.getByLabelText("Select size M");
    fireEvent.click(sizeM);

    expect(sizeM).toHaveClass("active");
  });

  it.skip("does not render anything if sizes array is empty", () => {
    const mockSelected = jest.fn();
    const mockInventory = { color: "red" };
    const mockUnavailableSizes = { red: [] };

    const { container } = render(
      <ProductSize
        name="size"
        sizes={[]}
        selected={mockSelected}
        classes="custom-class"
        inventory={mockInventory}
        outOfStock={[]}
        unavailableSizes={mockUnavailableSizes}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
