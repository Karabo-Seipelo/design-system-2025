import type { Meta, StoryObj } from "@storybook/react";
import { AboutUsPageArgs } from "#/mocks/data";
import AboutUs from ".";

const meta = {
  title: "Marketing/Pages/AboutUs",
  component: AboutUs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AboutUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...AboutUsPageArgs,
  },
};
