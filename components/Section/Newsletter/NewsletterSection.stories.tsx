import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within, expect } from "@storybook/test";
import { http, HttpResponse } from "msw";
import NewsletterSection from ".";
import Artboard from "../../atoms/Artboard";
import Toast from "../../Toast";

const meta = {
  title: "Marketing/Section/Newsletter",
  component: NewsletterSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: {
        submitForm: http.post("/newsletter/success", () => {
          return HttpResponse.json(
            {
              message:
                "Subscription successful! Please check your email to confirm.",
            },
            {
              status: 200,
            },
          );
        }),
        submitFormError: http.post("/newsletter/error", () => {
          return HttpResponse.json(
            {
              error: "Email format is invalid.",
            },
            {
              status: 500,
            },
          );
        }),
      },
    },
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Toast />
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof NewsletterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  title: "Get the finest curated abstracts delivered weekly to your inbox",
  features: [
    {
      description: "Exclusive access to new abstract images and collections",
      icon: "check-fill.svg",
    },
    {
      description: "Unlock special promotions only for subscribers",
      icon: "check-fill.svg",
    },
    {
      description: "Regular doses of artistic inspiration",
      icon: "check-fill.svg",
    },
  ],
  imageUrl: "abstract.jpg",
  form: {
    instruction: "Subscribe to our newsletter",
    label: "Subscribe",
    placeholder: "Enter your email address",
    toast: {
      success: {
        badge: "Success",
        message: "Subscription successful! Please check your email to confirm.",
        status: "SUCCESS",
      },
      error: {
        badge: "Error",
        message: "Subscription failed. Please try again.",
        status: "ERROR",
      },
    },
  },
};

const createStoryArgs = (formUrl: string) => ({
  ...baseArgs,
  form: {
    ...baseArgs.form,
    formUrl,
  },
});

const fillAndSubmitForm = async (
  canvas: ReturnType<typeof within>,
  email: string,
  step: any,
) => {
  await step("Fill in the form with an email address", async () => {
    await userEvent.type(canvas.getByTestId("email-input"), email);
  });

  await step("Submit the form", async () => {
    await userEvent.click(canvas.getByTestId("email-submit"));
  });

  await waitFor(() => expect(canvas.getByTestId("toast")).toBeVisible());
};

export const Default: Story = {
  args: createStoryArgs(
    "https://www.greatfrontend.com/api/projects/challenges/newsletter",
  ),
};

export const SuccessNotification: Story = {
  args: createStoryArgs("/newsletter/success"),
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await fillAndSubmitForm(canvas, "karabo@gmail.com", step);

    await waitFor(() =>
      expect(canvas.getByTestId("toast")).toHaveTextContent(
        args.form.toast.success.message,
      ),
    );
  },
};

export const ErrorNotification: Story = {
  args: createStoryArgs("/newsletter/error"),
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await fillAndSubmitForm(canvas, "karabo@gmail.com", step);

    await waitFor(() =>
      expect(canvas.getByTestId("toast")).toHaveTextContent(
        args.form.toast.error.message,
      ),
    );
  },
};
