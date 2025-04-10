import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonField, { ButtonFieldType } from "./ButtonField";

describe("ButtonField", () => {
  const mockButtonFieldProps = {
    label: "Submit",
    type: ButtonFieldType.SUBMIT,
    id: "submit-button",
    classes: "",
    testId: "submit-button-test",
  };

  it("renders correctly with required props", () => {
    render(<ButtonField {...mockButtonFieldProps} />);
    const buttonElement = screen.getByTestId("submit-button-test");
    const label = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveAttribute("id", "submit-button");
  });

  it("renders without optional props", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { classes, testId, ...rest } = mockButtonFieldProps;
    render(<ButtonField {...rest} />);
    const buttonElement = screen.getByTestId("field");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toHaveAttribute("className");
  });

  it("renders with custom classes", () => {
    const customClasses = "custom-class";
    render(<ButtonField {...mockButtonFieldProps} classes={customClasses} />);
    const buttonElement = screen.getByTestId("field");
    expect(buttonElement).toHaveClass(customClasses);
  });

  it("renders with a click event", () => {
    const handleClick = jest.fn();
    render(
      <form onSubmit={handleClick}>
        <ButtonField {...mockButtonFieldProps} />
      </form>,
    );
    const buttonElement = screen.getByTestId("submit-button-test");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
