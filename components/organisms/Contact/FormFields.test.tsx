import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormFields from "./FormFields";

describe("FormFields", () => {
  const mockProps = {
    fields: [
      {
        label: "Name",
        name: "name",
        id: "name-field",
        placeholder: "Enter your name",
        required: true,
        type: "text",
        testId: "name-input",
        renderType: "text",
      },
      {
        label: "Email",
        name: "email",
        id: "email-field",
        placeholder: "Enter your email",
        required: true,
        type: "email",
        testId: "email-input",
        renderType: "email",
      },
      {
        label: "Message",
        name: "message",
        id: "message-field",
        placeholder: "Enter your message",
        required: false,
        type: "textarea",
        testId: "message-input",
        renderType: "textarea", // Add this property
      },
    ],
  };

  it("renders all fields correctly", () => {
    render(<FormFields {...mockProps} />);
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("message-input")).toBeInTheDocument();
  });

  it("renders grouped fields correctly", () => {
    const groupedProps = {
      ...mockProps,
      fields: [
        {
          label: "Phone",
          name: "phone",
          id: "phone-field",
          placeholder: "Enter your phone number",
          required: false,
          type: "text",
          testId: "phone-input",
          renderType: "text",
          groupWithNext: true,
        },
        ...mockProps.fields,
      ],
    };

    render(<FormFields {...groupedProps} />);
    expect(screen.getByTestId("phone-input")).toBeInTheDocument();
    expect(screen.getByTestId("name-input")).toBeVisible();
    expect(screen.getByTestId("email-input")).toBeVisible();
    expect(screen.getByTestId("message-input")).toBeVisible();
  });
});
