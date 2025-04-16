import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./Sizes.stories";
const { Default, Active, Disabled, AllStates } = composeStories(stories);
import Size from ".";

describe("Size Component", () => {
  it("renders all states", () => {
    render(<AllStates />);
    const allStates = screen.getByTestId("all-states");
    expect(allStates).toBeInTheDocument();
  });
  it("renders the size button with the correct size label", () => {
    render(<Default />);

    expect(screen.getByLabelText("Select size M")).toBeInTheDocument();
    expect(screen.getByText("M")).toBeInTheDocument();
  });

  it("applies the correct variant classes when active", () => {
    render(<Active />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-indigo-600");
  });

  it("applies the correct variant classes when not active", () => {
    render(<Size name="size" size="M" active={false} isOutOfStock={false} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-neutral-200");
  });

  it("disables the button when isOutOfStock is true", () => {
    render(<Disabled />);

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
