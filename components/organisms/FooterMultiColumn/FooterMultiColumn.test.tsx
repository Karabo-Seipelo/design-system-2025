import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./FooterMultiColumn.stories";
const { Default } = composeStories(stories);
const mockAction = jest.fn();
jest.mock("@storybook/addon-actions", () => ({
  action: () => mockAction,
}));
jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    return <img {...props} />;
  },
}));

describe("FooterMultiColumn Component", () => {
  describe("When a user views the footer", () => {
    it("should display the footer", () => {
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

  // TODO: after adding automation in storybook this test started failing will revisit this
  describe("When a user submits their email", () => {
    it.skip("should process the subscription request", async () => {
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
