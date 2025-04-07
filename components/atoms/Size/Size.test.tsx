import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Size from ".";

describe("Size Component", () => {
  it("renders the size button with the correct size label", () => {
    render(<Size name="size" size="M" active={false} isOutOfStock={false} />);

    expect(screen.getByLabelText("Select size M")).toBeInTheDocument();
    expect(screen.getByText("M")).toBeInTheDocument();
  });

  it("applies the correct variant classes when active", () => {
    render(<Size name="size" size="M" active={true} isOutOfStock={false} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-indigo-600");
  });

  it("applies the correct variant classes when not active", () => {
    render(<Size name="size" size="M" active={false} isOutOfStock={false} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-neutral-200");
  });

  it("disables the button when isOutOfStock is true", () => {
    render(<Size name="size" size="M" active={false} isOutOfStock={true} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Size
        name="size"
        size="M"
        onClick={handleClick}
        active={false}
        isOutOfStock={false}
      />,
    );

    const button = screen.getByRole("button");
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders the correct aria-label when ariaLabel prop is provided", () => {
    render(
      <Size
        name="size"
        size="M"
        ariaLabel="Custom aria label"
        active={false}
        isOutOfStock={false}
      />,
    );

    expect(screen.getByLabelText("Custom aria label")).toBeInTheDocument();
  });
});
