import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./SubscribeNewsletter.stories";
const { Default } = composeStories(stories);
const mockAction = jest.fn();
jest.mock("@storybook/addon-actions", () => ({
  action: () => mockAction,
}));

describe("SubscribeNewsletter Component", () => {
  describe("When a user views the newsletter form", () => {
    it("should display the newsletter", () => {
      render(<Default />);
      const text = screen.getByText(/Join our newsletter/);
      expect(text).toBeInTheDocument();
    });

    it("should show an input field for email and submit button", () => {
      render(<Default />);
      const input = screen.getByPlaceholderText("Enter your email");
      const button = screen.getByRole("button", { name: "Subscribe" });
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When a user submits their email", () => {
    it("should process the subscription request", async () => {
      render(<Default />);
      const input = screen.getByPlaceholderText("Enter your email");
      const button = screen.getByRole("button", { name: "Subscribe" });

      await userEvent.type(input, "test@example.com");
      fireEvent.click(button);

      expect(mockAction).toHaveBeenCalledTimes(1);
      expect(mockAction).toHaveBeenCalledWith();
    });
  });
});
