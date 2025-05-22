import type { Meta, StoryObj } from "@storybook/react";
import ContactSection from ".";
import { http, HttpResponse } from "msw";
import Artboard from "$/atoms/Artboard/index";
import Toast from "$/organisms/Toast";
import {
  ContactArgs,
  ContactSuccessArgs,
  ContactErrorArgs,
} from "#/mocks/data/Section/Contact/index";

const meta = {
  title: "Marketing/Section/Contact",
  component: ContactSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: {
        submitForm: http.post("/contact/success", () => {
          return HttpResponse.json(
            {
              message:
                "Submission successful! We will get back to you in 3-5 days via email.",
            },
            {
              status: 200,
            },
          );
        }),
        submitFormError: http.post("contact/error", () => {
          return HttpResponse.json(
            {
              error: "Message cannot be empty.",
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
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ContactArgs,
  },
};

export const SuccessContact: Story = {
  args: {
    ...ContactSuccessArgs,
  },
};

export const ErrorContact: Story = {
  args: {
    ...ContactErrorArgs,
  },
};
