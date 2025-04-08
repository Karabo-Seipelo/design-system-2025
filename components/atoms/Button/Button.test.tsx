import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./Button.stories";
const {
  Default,
  DefaultDisabled,
  Primary,
  Secondary,
  PrimaryDisabled,
  Link,
  LinkDisabled,
} = composeStories(stories);
import Button from ".";

describe("Button", () => {
  it("renders with default variant", () => {
    render(<Default />);
    const button = screen.getByText(/Add Cart/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-white");
  });

  it("renders with Secondary variant", () => {
    render(<Secondary />);
    const button = screen.getByText(/Add Cart/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-white");
  });

  it("renders with default disabled", () => {
    render(<DefaultDisabled />);
    const button = screen.getByText(/Add Cart/i);
    expect(button).toBeDisabled();
  });

  it("renders with primary variant ", () => {
    render(<Primary />);
    const button = screen.getByText(/Add Cart/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-indigo-700");
  });

  it("renders with primary disabled", () => {
    render(<PrimaryDisabled />);
    const button = screen.getByText(/Add Cart/i);
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:bg-neutral-100");
  });

  it("renders with no variant", () => {
    render(<Button size="md">Click Me</Button>);
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });

  it("renders with link variant", () => {
    render(<Link />);
    const button = screen.getByText(/See all 62 reviews/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-indigo-700");
  });

  it("renders with link disabled", () => {
    render(<LinkDisabled />);
    const button = screen.getByText(/See all 62 reviews/i);
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:text-neutral-400");
  });
});
