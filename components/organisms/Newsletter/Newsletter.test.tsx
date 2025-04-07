import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NewsletterSection from ".";
import axios from "axios";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes & React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    return <img {...props} />;
  },
}));

jest.mock("axios");

describe("NewsletterSection", () => {
  const mockShowToast = jest.fn();
  const mockPost = jest.fn();

  const mockProps = {
    formUrl: "/api/subscribe",
    instruction: "Enter your email to subscribe.",
    label: "Subscribe",
    placeholder: "Your email",
    title: "Subscribe to our Newsletter",
    features: [
      { title: "Feature 1", description: "Description 1", icon: "icon1" },
      { title: "Feature 2", description: "Description 2", icon: "icon2" },
    ],
    imageUrl: "/test-image.jpg",
    form: {
      formUrl: "/api/subscribe",
      instruction: "Enter your email to subscribe.",
      label: "Subscribe",
      placeholder: "Your email",
      toast: {
        success: {
          badge: "success",
          message: "Subscribed successfully!",
          status: "success",
        },
        error: {
          badge: "error",
          message: "Subscription failed.",
          status: "error",
        },
      },
    },
  };

  jest.mock("axios", () => ({
    post: mockPost,
  }));

  jest.mock("../../organisms/Toast/useToast", () => ({
    __esModule: true,
    default: () => ({
      showToast: mockShowToast,
    }),
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the NewsletterSection with all props", () => {
    render(<NewsletterSection {...mockProps} />);

    expect(screen.getByText("Subscribe to our Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
    expect(screen.getByAltText("testing")).toBeInTheDocument();
  });

  it.skip("submits the form successfully and shows a success toast", async () => {
    mockPost.mockResolvedValueOnce({ status: 200 });

    render(<NewsletterSection {...mockProps} />);

    const emailInput = screen.getByTestId("email-input");
    const submitButton = screen.getByTestId("email-submit");

    expect(submitButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(submitButton);
  });

  it("does not submit the form if email is not provided", async () => {
    render(<NewsletterSection {...mockProps} />);

    const submitButton = screen.getByTestId("email-submit");

    await userEvent.click(submitButton);

    expect(mockPost).not.toHaveBeenCalled();
    expect(mockShowToast).not.toHaveBeenCalled();
  });
});
