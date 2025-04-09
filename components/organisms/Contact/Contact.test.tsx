import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ContactSection.stories";

const { Default, SuccessContact } = composeStories(stories);

import ContactSection from ".";

describe("ContactSection", () => {
  const mockProps = {
    title: "Contact Us",
    description: "Feel free to reach out to us anytime.",
    contactDetails: [
      {
        label: "Email",
        value: "contact@example.com",
        description: "Our support email address",
        icon: "/icons/email.png",
      },
      {
        label: "Phone",
        value: "+1234567890",
        description: "Our support phone number",
        icon: "/icons/phone.png",
      },
    ],
    form: {
      fields: [
        {
          id: "name-field",
          name: "name",
          label: "Name",
          type: "text",
          placeholder: "Your Name",
          renderType: "input",
          testid: "name-input",
        },
        {
          id: "email-field",
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Your Email",
          renderType: "input",
          testid: "email-input",
        },
      ],
      url: "/api/contact",
      notification: {
        success: {
          message: "Form submitted successfully!",
          icon: "/success.png",
          badge: "Success",
          status: "success",
        },
        error: {
          message: "Failed to submit the form.",
          icon: "/error.png",
          badge: "Error",
          status: "failure",
        },
      },
    },
    dropShadow: true,
    resendForm: { label: "Resend" },
  };

  jest.mock("msw", () => {
    const originalModule = jest.requireActual("msw");
    return {
      ...originalModule,
      http: {
        get: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
        patch: jest.fn(),
      },
      HttpResponse: jest.fn((status, body) => ({
        status,
        body,
      })),
    };
  });

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  it("renders with default props", () => {
    render(<Default />);
    const title = screen.getByText("Talk to our team");
    const description = screen.getByText(
      "We've committed to delivering the support you require to make your experience as smooth as possible.",
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it.skip("renders with success contact props", () => {
    render(<SuccessContact />);
    const nameIput = screen.getByPlaceholderText("Enter your name");
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const message = screen.getByPlaceholderText("Write your message...");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(nameIput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "John.doe@gmail.com" } });
    fireEvent.change(message, { target: { value: "Hello!" } });
    fireEvent.click(submitButton);

    expect(nameIput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("John.doe@gmail.com");
    expect(message).toHaveValue("Hello!");
    expect(submitButton).toBeInTheDocument();
  });

  it.skip("renders the title and description", () => {
    render(<ContactSection {...mockProps} />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("Feel free to reach out to us anytime."),
    ).toBeInTheDocument();
  });

  it.skip("renders the contact details", () => {
    render(<ContactSection {...mockProps} />);
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByText("contact@example.com")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("+1234567890")).toBeInTheDocument();
  });

  it.skip("renders the form fields", () => {
    render(<ContactSection {...mockProps} />);
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
  });

  it.skip("displays success message when form is successfully submitted", () => {
    const mockUseFormSubmit = jest.fn().mockReturnValue({
      submitHandler: jest.fn(),
      formStatus: mockProps.form.notification.success,
      formSuccess: true,
      setFormStatus: jest.fn(),
      setFormSuccess: jest.fn(),
    });
    jest.mock("./useFormSubmit", () => mockUseFormSubmit);

    render(<ContactSection {...mockProps} />);
    expect(
      screen.getByText("Form submitted successfully!"),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Form submitted successfully!"),
    ).toBeInTheDocument();
  });

  it.skip("displays error message when form submission fails", () => {
    const mockUseFormSubmit = jest.fn().mockReturnValue({
      submitHandler: jest.fn(),
      formStatus: mockProps.form.notification.error,
      formSuccess: false,
      setFormStatus: jest.fn(),
      setFormSuccess: jest.fn(),
    });
    jest.mock("./useFormSubmit", () => mockUseFormSubmit);

    render(<ContactSection {...mockProps} />);
    expect(screen.getByText("Failed to submit the form.")).toBeInTheDocument();
    expect(
      screen.getByAltText("Failed to submit the form."),
    ).toBeInTheDocument();
  });

  it.skip("calls resetHandler when resend button is clicked", () => {
    const mockSetFormSuccess = jest.fn();
    const mockSetFormStatus = jest.fn();
    jest.mock("./useFormSubmit", () => ({
      submitHandler: jest.fn(),
      formStatus: mockProps.form.notification.success,
      formSuccess: true,
      setFormStatus: mockSetFormStatus,
      setFormSuccess: mockSetFormSuccess,
    }));

    render(<ContactSection {...mockProps} />);
    const resendButton = screen.getByText("Resend");
    resendButton.click();
    expect(mockSetFormSuccess).toHaveBeenCalled();
    expect(mockSetFormStatus).toHaveBeenCalledWith(null);
  });
});
