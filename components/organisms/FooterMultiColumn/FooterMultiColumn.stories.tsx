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
      title: "Join our newsletter",
      description:
        "Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.",
      formUrl:
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
      onSubmit: async (email: string) => {
        action("onSubmit")();
      },
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
        variant: "primary",
        type: "submit",
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
    },
    trademark: {
      logo: {
        image_url: "styleNest.png",
        alt: "StyleNest Logo",
      },
      description:
        "Craft stunning style journeys that weave<br/> more joy into every thread.",
    },
    columns: [
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
    ],
    socialAndTerms: {
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
    },
  },
};

export const SubmitEmail: Story = {
  args: {
    form: {
      title: "Join our newsletter",
      description:
        "Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.",
      formUrl:
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
      onSubmit: async (email: string) => {
        await axios.post(
          "https://www.greatfrontend.com/api/projects/challenges/newsletter",
          { email },
        );
      },
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
        variant: "primary",
        type: "submit",
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
    },

    trademark: {
      logo: {
        image_url: "styleNest.png",
        alt: "StyleNest Logo",
      },
      description:
        "Craft stunning style journeys that weave<br/> more joy into every thread.",
    },
    columns: [
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
    ],
    socialAndTerms: {
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
    },
  },
};

export const SuccessNotification: Story = {
  args: {
    form: {
      title: "Join our newsletter",
      description:
        "Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.",
      formUrl: "/newsletter/success",
      onSubmit: async (email: string) => {
        await axios.post("/newsletter/success", { email });
      },
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
        variant: "primary",
        type: "submit",
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
    },

    trademark: {
      logo: {
        image_url: "styleNest.png",
        alt: "StyleNest Logo",
      },
      description:
        "Craft stunning style journeys that weave<br/> more joy into every thread.",
    },
    columns: [
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
    ],
    socialAndTerms: {
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
    },
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
      title: "Join our newsletter",
      description:
        "Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.",
      formUrl: "newsletter/error",
      onSubmit: async (email: string) => {
        await axios.post("/newsletter/error", { email });
      },
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
        variant: "primary",
        type: "submit",
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
    },

    trademark: {
      logo: {
        image_url: "styleNest.png",
        alt: "StyleNest Logo",
      },
      description:
        "Craft stunning style journeys that weave<br/> more joy into every thread.",
    },
    columns: [
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
    ],
    socialAndTerms: {
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
    },
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
