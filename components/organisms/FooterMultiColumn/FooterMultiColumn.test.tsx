/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./FooterMultiColumn.stories";
const { Default } = composeStories(stories);
const mockAction = jest.fn();
const mocksubmitHandler = jest.fn();
jest.mock("@storybook/addon-actions", () => ({
  action: () => mockAction,
}));
jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    return <img {...props} />;
  },
}));
jest.mock("@hooks/forms/useSubmitNewsletter", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    submitHandler: jest.fn((event) => {
      event.preventDefault();
      mocksubmitHandler();
    }),
  })),
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

  describe("When a user submits their email", () => {
    it.skip("should process the subscription request", async () => {
      render(<Default />);
      const input = screen.getByPlaceholderText("Enter your email");
      const button = screen.getByRole("button", { name: "Subscribe" });

      await fireEvent.change(input, {
        target: {
          value: "test@example.com",
        },
      });

      fireEvent.click(button);

      expect(mocksubmitHandler).toHaveBeenCalledTimes(1);
    });
  });

  /*
  describe("Form Submission", () => {
    it("should display a success toast on successful form submission", async () => {
      axios.post.mockResolvedValueOnce({ data: { message: "Success" } });

      render(<SuccessNotification />);
      const input = screen.getByPlaceholderText("Enter your email");
      const button = screen.getByRole("button", { name: "Subscribe" });

      fireEvent.change(input, { target: { value: "test@example.com" } });
      fireEvent.click(button);

      await waitFor(() =>
        expect(screen.getByTestId("toast")).toHaveTextContent(
          "You have successfully subscribed to our newsletter."
        )
      );
    });

    it("should display an error toast on failed form submission", async () => {
      axios.post.mockRejectedValueOnce(new Error("Error"));

      render(<ErrorNotification />);
      const input = screen.getByPlaceholderText("Enter your email");
      const button = screen.getByRole("button", { name: "Subscribe" });

      fireEvent.change(input, { target: { value: "test@example.com" } });
      fireEvent.click(button);

      await waitFor(() =>
        expect(screen.getByTestId("toast")).toHaveTextContent(
          "There was an error subscribing to the newsletter."
        )
      );
    });
  });

  describe("API Calls", () => {
    it("should call the correct API endpoint on form submission", async () => {
      axios.post.mockResolvedValueOnce({ data: { message: "Success" } });

      render(<SuccessNotification />);
      const input = screen.getByPlaceholderText("Enter your email");
      const button = screen.getByRole("button", { name: "Subscribe" });

      fireEvent.change(input, { target: { value: "test@example.com" } });
      fireEvent.click(button);

      await waitFor(() =>
        expect(axios.post).toHaveBeenCalledWith("/newsletter/success", {
          email: "test@example.com",
        })
      );
    });
  });
  */
});
