import type { Meta, StoryObj } from "@storybook/react";
import FAQ from "./index";
import { FaqArgs } from "../../../__mocks__/data/index";

const meta = {
  title: "Marketing/Section/FAQ",
  component: FAQ,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...FaqArgs },
};
