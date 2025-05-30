/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import * as stories from "./ContactSection.stories";
const { Default } = composeStories(stories);
import { mockUseFormSubmit } from "../../../__mocks__/component/organisms/Contact";
// import ContactSection from ".";

describe("ContactSection", () => {
  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  beforeEach(() => {
    global.FormData = jest.fn(() => ({
      append: jest.fn(),
      delete: jest.fn(),
      get: jest.fn(),
      getAll: jest.fn(),
      has: jest.fn(),
      set: jest.fn(),
      forEach: jest.fn(),
    })) as unknown as typeof FormData;

    renderHook(() => mockUseFormSubmit({}));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Given the contact section is rendered", () => {
    beforeEach(() => {
      render(<Default />);
    });

    describe("when viewing the contact details", () => {
      it("should display the contact information", () => {
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
    });

    describe("when viewing the form", () => {
      it("should display all form fields and the submit button", () => {
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Message")).toBeInTheDocument();
        expect(
          screen.getByRole("button", { name: "Submit" }),
        ).toBeInTheDocument();
      });
    });

    describe("when the user fills in the form", () => {
      it.skip("should update the form fields with the entered values", async () => {
        const mockSubmitHandler = jest.fn();
        renderHook(() =>
          mockUseFormSubmit({
            submitHandler: mockSubmitHandler,
            formStatus: {
              icon: "success",
            },
            formSuccess: true,
          }),
        );

        const user = userEvent.setup();
        const nameField = screen.getByRole("textbox", { name: /name/i });
        const emailField = screen.getByRole("textbox", { name: /email/i });
        const message = screen.getByRole("textbox", { name: /message/i });
        const submitButton = screen.getByRole("button", { name: /submit/i });

        await user.type(nameField, "John Doe");
        await user.type(emailField, "test@testing.com");
        await user.type(message, "This is a test message.");

        expect(nameField).toHaveValue("John Doe");
        expect(emailField).toHaveValue("test@testing.com");
        expect(message).toHaveValue("This is a test message.");
        expect(submitButton).toBeInTheDocument();

        await user.click(submitButton);

        expect(mockSubmitHandler).toHaveBeenCalled();
      });
    });
  });
});
