/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NewsletterSection from ".";
import { mockUseToast } from "../../../__mocks__/component/organisms/Toast";
import { createFormDataMock } from "../../../__mocks__/formData";
import axios from "axios";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes & React.ImgHTMLAttributes<HTMLImageElement>,
  ) => {
    return <img {...props} />;
  },
}));

jest.mock("axios");

describe("NewsletterSection", () => {
  // const mockShowToast = jest.fn();
  const mockPost = jest.fn();
  const mockDisplayToast = jest.fn();

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
    status: 200,
  }));

  beforeEach(() => {
    // global.FormData = jest.fn(() => mockFormData) as any;
    global.FormData = jest.fn(() =>
      createFormDataMock({
        get: jest.fn().mockImplementation((key: string) => {
          if (key === "email") {
            return "test@example.com";
          }
        }),
      }),
    ) as unknown as typeof FormData;

    renderHook(() =>
      mockUseToast({
        displayToast: mockDisplayToast,
      }),
    );
  });

  afterEach(() => {
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

  describe("when the form is submitted", () => {
    it("submits the form successfully and shows a success toast", async () => {
      jest.spyOn(axios, "post").mockResolvedValue({
        status: 200,
        data: { message: "Subscribed successfully!" },
      });

      render(<NewsletterSection {...mockProps} />);

      const emailInput = screen.getByTestId("email-input");
      const submitButton = screen.getByTestId("email-submit");

      expect(submitButton).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();

      await userEvent.type(emailInput, "test@example.com");
      await userEvent.click(submitButton);

      expect(mockDisplayToast).toHaveBeenCalled();
    });

    it("submits the form with an error and shows a error toast", async () => {
      jest.spyOn(axios, "post").mockResolvedValue({
        status: 500,
        data: { message: "Something has gone wrong" },
      });

      render(<NewsletterSection {...mockProps} />);

      const emailInput = screen.getByTestId("email-input");
      const submitButton = screen.getByTestId("email-submit");

      expect(submitButton).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();

      await userEvent.type(emailInput, "test@example.com");
      await userEvent.click(submitButton);

      expect(mockDisplayToast).toHaveBeenCalled();
    });
  });
});
