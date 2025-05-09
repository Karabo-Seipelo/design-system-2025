import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./inputField.stories";
const {
  Default,
  Disabled,
  InputError,
  Required,
  WithHint,
  WithNoErrorMessage,
  WithIdAndLabel,
  AllStates,
} = composeStories(stories);

describe("InputField Component", () => {
  it("renders with default variant", () => {
    render(<Default />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
  });

  it("renders with Disabled", () => {
    render(<Disabled />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
  });

  it("renders with Error", () => {
    render(<InputError />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
  });

  it("renders with NoErrorMessage", () => {
    render(<WithNoErrorMessage />);
    const input = screen.getByPlaceholderText("Enter your email");
    const error = screen.getByText("Invalid input");
    expect(error).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("renders with Required", () => {
    render(<Required />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
  });

  it("renders with WithHint", () => {
    render(<WithHint />);
    const input = screen.getByPlaceholderText("Enter your email");
    const hint = screen.getByText("This is a hint to help user.");
    expect(input).toBeInTheDocument();
    expect(hint).toBeInTheDocument();
  });

  it("renders with WithId", () => {
    render(<WithIdAndLabel />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
  });

  it("renders with AllStates", () => {
    render(<AllStates />);
    const input = screen.getByText("Input field");
    expect(input).toBeInTheDocument();
  });
});
