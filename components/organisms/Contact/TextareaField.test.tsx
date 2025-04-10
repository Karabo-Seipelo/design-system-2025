import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextareaField from "./TextareaField";

describe("TextareaField", () => {
  const mockTextareaFieldProps = {
    label: "Message",
    name: "message",
    id: "message-field",
    placeholder: "Your Message",
    required: true,
    disabled: false,
    classes: "",
    testId: "message-textarea",
    characterLimit: 200,
  };

  it("renders correctly with required props", () => {
    render(<TextareaField {...mockTextareaFieldProps} />);
    const label = screen.getByLabelText("Message");
    const textareaElement = screen.getByPlaceholderText("Your Message");
    const charCountElement = screen.queryByTestId("char-count");
    expect(textareaElement).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(textareaElement).toHaveAttribute("name", "message");
    expect(textareaElement).toHaveAttribute("id", "message-field");
    expect(textareaElement).toHaveAttribute("required");
    expect(textareaElement).not.toBeDisabled();
    expect(textareaElement).toHaveAttribute("maxLength", "200");
    expect(charCountElement).toBeInTheDocument();
    expect(charCountElement).toHaveTextContent("0/200");
  });

  it("renders without the optional props", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { required, disabled, classes, characterLimit, testId, ...rest } =
      mockTextareaFieldProps;
    render(<TextareaField {...rest} />);
    const textareaElement = screen.getByPlaceholderText("Your Message");
    const charCountElement = screen.queryByTestId("char-count");
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).not.toHaveAttribute("required");
    expect(textareaElement).not.toBeDisabled();
    expect(charCountElement).not.toBeInTheDocument();
  });

  it("renders with custom classes", () => {
    const customClasses = "custom-class";
    render(
      <TextareaField {...mockTextareaFieldProps} classes={customClasses} />,
    );
    const textareaElement = screen.getByTestId("field");
    expect(textareaElement).toHaveClass(customClasses);
  });

  it("renders with a value", () => {
    render(<TextareaField {...mockTextareaFieldProps} />);
    const textareaElement = screen.getByRole("textbox") as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: "Hello World" } });
    expect(textareaElement.value).toBe("Hello World");
    const charCountElement = screen.getByTestId("char-count");
    expect(charCountElement).toHaveTextContent("11/200");
  });
});
