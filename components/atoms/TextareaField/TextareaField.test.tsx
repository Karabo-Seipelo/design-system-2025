import { render, screen, act, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./TextareaField.stories";
import { mockUseTextareaField } from "../../../__mocks__/component/atoms/TextareaField";

jest.mock("./useTextareaField", () => ({
  __esModule: true,
  default: jest.fn(),
}));

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
  beforeEach(() => {
    renderHook(() => mockUseTextareaField({}));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when rendered with default props", () => {
    it("should display a textarea with the correct placeholder", async () => {
      //
      render(<Default />);
      const textarea = screen.getByPlaceholderText("Enter your message");

      await act(async () => {
        expect(textarea).toBeInTheDocument();
      });
    });
  });

  describe("when character count is enabled", () => {
    it("should display the textarea with character count", () => {
      render(<FilledWithCharacterCount />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
      expect(screen.getByText(/\/\d+/)).toBeInTheDocument();
    });
  });

  describe("when disabled", () => {
    it("should display a disabled textarea", () => {
      render(<Disabled />);
      const textarea = screen.getByPlaceholderText("Enter your message");
      expect(textarea).toBeInTheDocument();
      expect(textarea).toBeDisabled();
    });
  });

  describe("when required", () => {
    it("should not be focused after clicking", async () => {
      renderHook(() =>
        mockUseTextareaField({
          showRequiredError: true,
        }),
      );
      render(<Required />);
      const textarea = screen.getByPlaceholderText("Enter your message");

      expect(textarea).toBeInTheDocument();

      expect(screen.getByText(/required message/i)).toBeInTheDocument();
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
      renderHook(() =>
        mockUseTextareaField({
          showErrorMessage: true,
          errorMessage: "This is an error message",
        }),
      );
      render(<WithError />);
      const textareaValue = screen.getByDisplayValue("abc123");
      expect(textareaValue).toBeInTheDocument();
      expect(screen.getByText(/This is an error message/i)).toBeInTheDocument();
    });
  });
});
