import type { Meta, StoryObj } from "@storybook/react";
import { ContactUsPageArgs } from "#/mocks/data";
import ContactUs from ".";

const meta = {
  title: "Marketing/Pages/ContactUs",
  component: ContactUs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ContactUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ContactUsPageArgs,
  },
  parameters: {
    nextjs: {
      router: {
        pathname: "/contact",
      }
    }
  }
};
