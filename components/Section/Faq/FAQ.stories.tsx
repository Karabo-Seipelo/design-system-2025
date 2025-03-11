import type { Meta, StoryObj } from "@storybook/react";
import Faq from "./index";
import Artboard from "../../atoms/Artboard";
import { FaqArgs } from "../../../lib/mocks/data/index";

const meta = {
  title: "Marketing/Section/FAQ",
  component: Faq,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...FaqArgs },
};
