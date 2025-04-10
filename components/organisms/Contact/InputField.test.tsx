import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputField from "./InputField";

describe("InputField", () => {
  const mockInputFieldProps = {
    label: "Email",
    type: "email",
    name: "email",
    id: "email-field",
    placeholder: "Your Email",
    required: true,
    disabled: false,
    classes: "",
    testId: "email-input",
  };
  it.skip("renders correctly with required props", () => {
    render(<InputField {...mockInputFieldProps} />);
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

  it.skip("renders with required and disabled props", () => {
    render(
      <InputField {...mockInputFieldProps} required={true} disabled={true} />,
    );
    const inputElement = screen.getByPlaceholderText("Your Email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("required");
    expect(inputElement).toBeDisabled();
  });

  it.skip("renders without classes, required and disabled props", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { required, disabled, classes, ...rest } = mockInputFieldProps;
    render(<InputField {...rest} />);
    const inputElement = screen.getByPlaceholderText("Your Email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toHaveAttribute("required");
    expect(inputElement).not.toBeDisabled();
  });

  it.skip("renders with custom classes", () => {
    const customClasses = "custom-class";
    render(<InputField {...mockInputFieldProps} classes={customClasses} />);
    const inputElement = screen.getByTestId("field");
    expect(inputElement).toHaveClass(customClasses);
  });

  it.skip("renders with a value", () => {
    render(<InputField {...mockInputFieldProps} />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test@gmail.com" } });
    expect(inputElement.value).toBe("test@gmail.com");
  });
});
