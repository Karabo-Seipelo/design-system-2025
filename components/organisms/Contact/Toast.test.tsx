import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toast, { ToastStatus } from "./Toast";

describe("Toast", () => {
  it("renders success toast correctly", () => {
    const props = {
      status: "SUCCESS",
      message: "Your message has been sent successfully.",
      badge: "Success",
    };

    render(<Toast {...props} />);
    const toastElement = screen.getByTestId("toast");
    const badgeElement = screen.getByText("Success");
    const messageElement = screen.getByText(
      "Your message has been sent successfully.",
    );
    expect(toastElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });

  it("renders error toast correctly", () => {
    const props = {
      status: "ERROR",
      message: "There was an error sending your message.",
      badge: "Error",
    };

    render(<Toast {...props} />);
    const toastElement = screen.getByTestId("toast");
    const badgeElement = screen.getByText("Error");
    const messageElement = screen.getByText(
      "There was an error sending your message.",
    );
    expect(toastElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
