import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FieldComponent from "./FieldComponent";
import { ButtonFieldType } from "./ButtonField";

describe("FieldComponent", () => {
  const mockEmailFieldProps = {
    label: "Email",
    type: "email",
    name: "email",
    id: "email-field",
    placeholder: "Your Email",
    required: true,
    disabled: false,
    classes: "",
    testId: "email-input",
    renderType: "email",
  };

  const mockTextareaFieldProps = {
    label: "Name",
    name: "name",
    id: "name-field",
    placeholder: "Your Name",
    required: true,
    disabled: false,
    classes: "",
    testId: "name-input",
    renderType: "text",
  };

  const mockTextareaFieldPropsWithLimit = {
    label: "Message",
    name: "message",
    id: "message-field",
    placeholder: "Your Message",
    required: true,
    disabled: false,
    classes: "",
    testId: "message-textarea",
    renderType: "textarea",
    characterLimit: 200,
  };

  const mockButtonFieldProps = {
    label: "Submit",
    name: "submit",
    id: "submit-button",
    type: ButtonFieldType.SUBMIT,
    classes: "",
    testId: "submit-button-test",
    renderType: "submit",
  };

  it("renders email field correctly with required props", () => {
    render(<FieldComponent {...mockEmailFieldProps} />);
    const inputElement = screen.getByPlaceholderText("Your Email");
    const label = screen.getByLabelText("Email");
    expect(label).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "email");
    expect(inputElement).toHaveAttribute("name", "email");
    expect(inputElement).toHaveAttribute("id", "email-field");
    expect(inputElement).toHaveAttribute("required");
    expect(inputElement).not.toBeDisabled();
  });

  it("renders email field  without optional props", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { required, disabled, classes, ...rest } = mockEmailFieldProps;
    render(<FieldComponent {...rest} />);
    const inputElement = screen.getByPlaceholderText("Your Email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toHaveAttribute("required");
    expect(inputElement).not.toBeDisabled();
  });

  it("renders text field correctly with required props", () => {
    render(<FieldComponent {...mockTextareaFieldProps} />);
    const inputElement = screen.getByPlaceholderText("Your Name");
    const label = screen.getByLabelText("Name");
    expect(label).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "name");
    expect(inputElement).toHaveAttribute("id", "name-field");
    expect(inputElement).toHaveAttribute("required");
    expect(inputElement).not.toBeDisabled();
  });

  it.skip("renders textarea field correctly with required props", () => {
    render(<FieldComponent {...mockTextareaFieldPropsWithLimit} />);
    const inputElement = screen.getByPlaceholderText("Your Message");
    const label = screen.getByLabelText("Message");
    expect(label).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "message");
    expect(inputElement).toHaveAttribute("id", "message-field");
    expect(inputElement).toHaveAttribute("required");
    expect(inputElement).not.toBeDisabled();
    expect(inputElement).toHaveAttribute("maxLength", "200");
  });

  it("renders textarea field without optional props", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { required, disabled, classes, ...rest } = mockTextareaFieldProps;
    render(<FieldComponent {...rest} />);
    const inputElement = screen.getByPlaceholderText("Your Name");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toHaveAttribute("required");
    expect(inputElement).not.toBeDisabled();
  });

  it("renders textarea field without it being required", () => {
    const props = {
      ...mockTextareaFieldProps,
      required: false,
    };
    render(<FieldComponent {...props} />);
    const inputElement = screen.getByPlaceholderText("Your Name");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toHaveAttribute("required");
  });

  it("renders correctly with required props", () => {
    render(<FieldComponent {...mockButtonFieldProps} />);
    const buttonElement = screen.getByRole("button", {
      name: "Submit",
      hidden: false,
    });
    const label = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
