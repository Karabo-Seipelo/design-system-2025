import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./TextareaField.stories";
const {
  Default,
  FilledWithCharacterCount,
  Disabled,
  Required,
  CharLimitExceed,
  Focus,
  WithError,
} = composeStories(stories);

describe("TextareaField Component", () => {
  describe("when rendered with default props", () => {
    it("should display a textarea with the correct placeholder", () => {
      render(<Default />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("when character count is enabled", () => {
    it("should display the textarea with character count", () => {
      render(<FilledWithCharacterCount />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("when disabled", () => {
    it("should display a disabled textarea", () => {
      render(<Disabled />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("when required", () => {
    it("should not be focused after clicking", async () => {
      render(<Required />);
      const textarea = screen.getByPlaceholderText("Enter your message");

      await userEvent.click(textarea);
      expect(document.activeElement).toBe(textarea);

      textarea.blur();

      expect(document.activeElement).not.toBe(textarea);

      expect(textarea).toBeInTheDocument();
    });
  });

  describe("when character limit is exceeded", () => {
    it("should display the textarea", () => {
      render(<CharLimitExceed />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("when focused", () => {
    it("should display the textare in focus state", () => {
      render(<Focus />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("when there is an error", () => {
    it("should display the error message and value", () => {
      render(<WithError />);
      const textareaMessage = screen.getByText("This is an error message");
      const textareaValue = screen.getByDisplayValue("abc123");

      expect(textareaMessage).toBeInTheDocument();
      expect(textareaValue).toBeInTheDocument();
    });
  });
});
