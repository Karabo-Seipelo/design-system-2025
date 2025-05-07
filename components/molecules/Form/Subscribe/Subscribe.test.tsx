import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockAction = jest.fn();
jest.mock("@storybook/addon-actions", () => ({
  action: () => mockAction,
}));

import { composeStories } from "@storybook/react";
import * as stories from "./Subscribe.stories";
const { Default } = composeStories(stories);

describe("Subscribe Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with default props", async () => {
    render(<Default />);
    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: "Subscribe" });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("allows typing in the input field", async () => {
    render(<Default />);
    const input = screen.getByPlaceholderText("Enter your email");

    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });

  it("calls onSubmit action when the form is submitted", async () => {
    render(<Default />);
    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: "Subscribe" });

    await userEvent.type(input, "test@example.com");
    fireEvent.click(button);

    expect(mockAction).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenCalledWith();
  });
});
