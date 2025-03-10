import type { Meta, StoryObj } from "@storybook/react";
import ContactSection from ".";
import { http, HttpResponse } from "msw";
import Container from "../../atoms/Container";
import {
  ContactArgs,
  ContactSuccessArgs,
  ContactErrorArgs,
} from "../../../lib/mocks/data/Section/Contact/index";

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
      <Container classes="w-full rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
        <Story />
      </Container>
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
