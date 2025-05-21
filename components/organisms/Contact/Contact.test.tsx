/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen, renderHook, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ContactSection.stories";
const { Default, SuccessContact, ErrorContact } = composeStories(stories);
import ContactSection from ".";

describe("ContactSection", () => {
  const mockProps = {
    title: "Contact Us",
    description: "Feel free to reach out to us anytime.",
    contactDetails: [
      {
        description: "Our support email address",
        icon: "/icons/email.png",
      },
      {
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
  const mockSubmitHandler = jest.fn();
  const mockSetFormStatus = jest.fn();
  const mockSetFormSuccess = jest.fn();
  const mockFormStatus = {
    message: "Form submitted successfully!",
    icon: "/success.png",
    badge: "Success",
    status: "success",
  };

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  jest.mock("./useFormSubmit", () => {
    return jest.fn(() => ({
      submitHandler: mockSubmitHandler,
      formStatus: null,
      formSuccess: false,
      setFormStatus: jest.fn(),
      setFormSuccess: jest.fn(),
    }));
  });

  beforeAll(() => {
    global.FormData = jest.fn(() => ({
      append: jest.fn(),
      delete: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      has: jest.fn(),
      set: jest.fn(),
      forEach: jest.fn(),
    })) as unknown as typeof FormData;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders component content with contact details", () => {
    render(<Default />);

    expect(screen.getByText("Talk to our team")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We've committed to delivering the support you require to make your experience as smooth as possible.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("123 Maple Street, Springfield IL, USA"),
    ).toBeInTheDocument();
    expect(screen.getByText("+1 (650) 555-0198")).toBeInTheDocument();
    expect(screen.getByText("hello@abstractly")).toBeInTheDocument();
  });

  it("renders the form fields correctly", () => {
    render(<Default />);

    const nameField = screen.getByLabelText("Name");
    const emailField = screen.getByLabelText("Email");
    const message = screen.getByLabelText("Message");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("renders the a filled in form", async () => {
    const user = userEvent.setup();
    render(<Default />);

    const nameField = screen.getByRole("textbox", { name: /name/i });
    const emailField = screen.getByRole("textbox", { name: /email/i });
    const message = screen.getByRole("textbox", { name: /message/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const form = screen.getByTestId("contact-form");

    await user.type(nameField, "John Doe");
    await user.type(emailField, "test@testing.com");
    await user.type(message, "This is a test message.");

    expect(nameField).toHaveValue("John Doe");
    expect(emailField).toHaveValue("test@testing.com");
    expect(message).toHaveValue("This is a test message.");
    expect(submitButton).toBeInTheDocument();
  });
});
