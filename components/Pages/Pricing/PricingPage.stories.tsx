import type { Meta, StoryObj } from "@storybook/react";
import { PricingPageArgs } from "../../../lib/mocks/data/index";
import PricingPage from ".";

const meta = {
  title: "Marketing/Pages/PricingPage",
  component: PricingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PricingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...PricingPageArgs,
  },
};
