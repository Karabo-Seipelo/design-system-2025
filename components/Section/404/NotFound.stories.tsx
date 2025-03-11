import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Artboard from "../../atoms/Artboard";
import NotFound from ".";

const meta = {
  title: "Marketing/Section/404",
  component: NotFound,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "We can’t find the page",
    subTitle: "Not found",
    description:
      "Sorry, the page you are looking for doesn't exist or has been moved.",
    button: {
      label: "Back to Home",
      primary: true,
      onClick: fn(),
    },
  },
};
