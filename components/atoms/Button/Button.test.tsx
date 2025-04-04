import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("Button", () => {
  it("renders with default variant", () => {
    render(
      <Button size="md" variant="primary">
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });

  it("renders with default variant and disabled", () => {
    render(
      <Button size="md" variant="primary" disabled>
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeDisabled();
  });

  it("renders with no variant", () => {
    render(<Button size="md">Click Me</Button>);
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });

  it("renders with autoFocus", () => {
    render(
      <Button size="md" variant="primary" autoFocus>
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveFocus();
  });

  it("renders with no size", () => {
    render(<Button variant="primary">Click Me</Button>);
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });

  it("renders a link button", () => {
    render(
      <Button size="link" variant="link">
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });

  it("renders a button with className", () => {
    render(
      <Button size="md" variant="primary" className="custom-class">
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveClass("custom-class");
  });

  it("renders a button with a type", () => {
    render(
      <Button size="md" variant="primary" type="submit">
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveAttribute("type", "submit");
  });

  it("renders a button click event", () => {
    const handleClick = jest.fn();
    render(
      <Button size="md" variant="primary" onClick={handleClick}>
        Click Me
      </Button>,
    );
    const button = screen.getByText(/Click Me/i);
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
