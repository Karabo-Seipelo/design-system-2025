import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within, expect } from "@storybook/test";
import Artboard from "$/atoms/Artboard/index";
import FooterMultiColumn from ".";
import { action } from "@storybook/addon-actions";
import { uniqueId } from "lodash";
import Toast from "$/organisms/Toast";
import { http } from "msw";
import {
  submitFormNewsletterSuccess,
  submitFormNewsletterError,
} from "../../../__mocks__/msw/httpHandlers";
import axios from "axios";
import { ButtonVariant, ButtonTypeEnum } from "$/atoms/Button/interfaces";

const meta = {
  title: "E-commerce/FooterMultiColumn",
  component: FooterMultiColumn,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: {
        submitForm: http.post(
          "/newsletter/success",
          submitFormNewsletterSuccess,
        ),
        submitFormError: http.post(
          "/newsletter/error",
          submitFormNewsletterError,
        ),
      },
    },
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[48px] md:py-[64px] lg:p-[96px]">
        <Toast />
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof FooterMultiColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonForm = {
  title: "Join our newsletter",
  description: "We’ll send you a nice letter once per week. No spam.",
  input: {
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    required: true,
    "aria-label": "Email",
    className: "basis-full md:basis-[80%]",
  },
  button: {
    label: "Subscribe",
    variant: ButtonVariant.PRIMARY,
    type: ButtonTypeEnum.SUBMIT,
  },
  toast: {
    success: {
      badge: "Success",
      message: "You have successfully subscribed to our newsletter.",
      status: "SUCCESS",
    },
    error: {
      badge: "Error",
      message: "There was an error subscribing to the newsletter.",
      status: "ERROR",
    },
  },
};

const trademark = {
  logo: {
    image_url: "styleNest.png",
    alt: "StyleNest Logo",
  },
  description:
    "Craft stunning style journeys that weave<br/> more joy into every thread.",
};

const columns = [
  {
    id: uniqueId(),
    title: "shop categories",
    items: [
      {
        id: uniqueId(),
        text: "unisex",
        url: "https://www.stylenest.com/unisex",
      },
      {
        id: uniqueId(),
        text: "women",
        url: "https://www.stylenest.com/unisex",
      },
      {
        id: uniqueId(),
        text: "men",
        url: "https://www.stylenest.com/unisex",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "shop collections",
    items: [
      {
        id: uniqueId(),
        text: "Latest arrivals",
        url: "https://www.stylenest.com/unisex",
      },
      {
        id: uniqueId(),
        text: "Urban Oasis",
        url: "https://www.stylenest.com/unisex",
      },
      {
        id: uniqueId(),
        text: "Cozy Comfort",
        url: "https://www.stylenest.com/unisex",
      },
      {
        id: uniqueId(),
        text: "Fresh Fusion",
        url: "https://www.stylenest.com/unisex",
      },
    ],
  },
];

const socialAndTerms = {
  description: "&copy; 2024 StyleNest, Inc. All rights reserved.",
  socialLinks: [
    {
      id: uniqueId(),
      name: "youtube",
      size: "large",
      color: "neutral",
      url: "https://www.youtube.com",
    },
    {
      id: uniqueId(),
      name: "instagram",
      size: "large",
      color: "neutral",
      url: "https://www.youtube.com",
    },
    {
      id: uniqueId(),
      name: "facebook",
      size: "large",
      color: "neutral",
      url: "https://www.youtube.com",
    },
    {
      id: uniqueId(),
      name: "github",
      size: "large",
      color: "neutral",
      url: "https://www.youtube.com",
    },
    {
      id: uniqueId(),
      name: "twitter",
      size: "large",
      color: "neutral",
      url: "https://www.youtube.com",
    },
  ],
};

const fillAndSubmitForm = async (
  canvas: ReturnType<typeof within>,
  email: string,
  step: any,
) => {
  await step("Fill in the form with an email address", async () => {
    await userEvent.type(
      canvas.getByPlaceholderText("Enter your email"),
      email,
    );
  });

  await step("Submit the form", async () => {
    await userEvent.click(canvas.getByRole("button", { name: "Subscribe" }));
  });

  await waitFor(() => expect(canvas.getByTestId("toast")).toBeVisible());
};

export const Default: Story = {
  args: {
    form: {
      ...commonForm,
      formUrl:
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
      onSubmit: async (email: string) => {
        console.log("Form submitted with email:", email);
        action("onSubmit")();
      },
    },
    trademark,
    columns,
    socialAndTerms,
  },
};

export const SubmitEmail: Story = {
  args: {
    form: {
      ...commonForm,
      formUrl:
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
      onSubmit: async (email: string) => {
        await axios.post(
          "https://www.greatfrontend.com/api/projects/challenges/newsletter",
          { email },
        );
      },
    },
    trademark,
    columns,
    socialAndTerms,
  },
};

export const SuccessNotification: Story = {
  args: {
    form: {
      ...commonForm,
      formUrl: "/newsletter/success",
      onSubmit: async (email: string) => {
        await axios.post("/newsletter/success", { email });
      },
    },
    trademark,
    columns,
    socialAndTerms,
  },
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
  args: {
    form: {
      ...commonForm,
      formUrl: "newsletter/error",
      onSubmit: async (email: string) => {
        await axios.post("/newsletter/error", { email });
      },
    },
    trademark,
    columns,
    socialAndTerms,
  },
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
