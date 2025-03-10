import { Meta, StoryObj } from "@storybook/react";
import FeaturesPage from ".";
import { FeaturesPageArgs } from "../../../lib/mocks/data/index";

const meta = {
  title: "Marketing/Pages/Features",
  tags: ["autodocs"],
  component: FeaturesPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FeaturesPage>;

export default meta;
type Story = StoryObj<typeof FeaturesPage>;

export const Default: Story = {
  args: { ...FeaturesPageArgs },
};
