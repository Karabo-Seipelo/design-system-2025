import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactSection from ".";

describe("ContactSection", () => {
  const mockProps = {
    title: "Contact Us",
    description: "Feel free to reach out to us anytime.",
    contactDetails: [
      { label: "Email", value: "contact@example.com" },
      { label: "Phone", value: "+1234567890" },
    ],
    form: {
      fields: [
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
      ],
      url: "/api/contact",
      notification: {
        success: {
          message: "Form submitted successfully!",
          icon: "/success.png",
        },
        error: { message: "Failed to submit the form.", icon: "/error.png" },
      },
    },
    dropShadow: true,
    resendForm: { label: "Resend" },
  };

  it("renders the title and description", () => {
    render(<ContactSection {...mockProps} />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("Feel free to reach out to us anytime.")
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
      screen.getByText("Form submitted successfully!")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Form submitted successfully!")
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
      screen.getByAltText("Failed to submit the form.")
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
