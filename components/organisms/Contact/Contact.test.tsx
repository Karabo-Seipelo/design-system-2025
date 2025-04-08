import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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
        },
        {
          id: "email-field",
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Your Email",
          renderType: "input",
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

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  it("renders the title and description", () => {
    render(<ContactSection {...mockProps} />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("Feel free to reach out to us anytime."),
    ).toBeInTheDocument();
  });

  it.skip("renders the contact details", () => {
    render(<ContactSection {...mockProps} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
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
