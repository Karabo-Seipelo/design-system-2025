import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, waitFor, within, expect } from "@storybook/test";
import { http } from "msw";
import {
  submitFormNewsletterSuccess,
  submitFormNewsletterError,
} from "../../../__mocks__/msw/httpHandlers";
import NewsletterSection from ".";
//import Artboard from "$/atoms/artboard";
import Toast from "$/molecules/toast";
import { NewsletterDefault } from "#/mocks/data/Section/Newsletter";

const meta = {
  title: "Marketing/Section/Newsletter",
  component: NewsletterSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: {
        submitForm: http.post(
          "/newsletter/success",
          submitFormNewsletterSuccess
        ),
        submitFormError: http.post(
          "/newsletter/error",
          submitFormNewsletterError
        ),
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Toast />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof NewsletterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
type StepFunction = (
  description: string,
  callback: () => Promise<void>
) => Promise<void>;

const fillAndSubmitForm = async (
  canvas: ReturnType<typeof within>,
  email: string,
  step: StepFunction
) => {
  await step("Fill in the form with an email address", async () => {
    await userEvent.type(canvas.getByTestId("email-input"), email);
  });

  await step("Submit the form", async () => {
    await userEvent.click(canvas.getByTestId("email-submit"));
  });

  await waitFor(() => expect(canvas.getByTestId("toast")).toBeVisible());
};

export const SuccessNotification: Story = {
  args: { ...NewsletterSuccess },
  play: async ({
    args,
    canvasElement,
    step,
  }: {
    args: any;
    canvasElement: ReturnType<typeof within>;
    step: StepFunction;
  }) => {
    const canvas = within(canvasElement);

    await fillAndSubmitForm(canvas, "karabo@gmail.com", step);

    await waitFor(() =>
      expect(canvas.getByTestId("toast")).toHaveTextContent(
        args.form.toast.success.message
      )
    );
  },
};

export const ErrorNotification: Story = {
  args: { ...NewsletterError },
  play: async ({
    args,
    canvasElement,
    step,
  }: {
    args: any;
    canvasElement: ReturnType<typeof within>;
    step: StepFunction;
  }) => {
    const canvas = within(canvasElement);

    await fillAndSubmitForm(canvas, "karabo@gmail.com", step);

    await waitFor(() =>
      expect(canvas.getByTestId("toast")).toHaveTextContent(
        args.form.toast.error.message
      )
    );
  },
};
*/

export const Default: Story = {
  args: {
    ...NewsletterDefault,
  },
};
