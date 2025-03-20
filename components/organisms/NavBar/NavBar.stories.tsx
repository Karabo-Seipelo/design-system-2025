import type { Meta, StoryObj } from "@storybook/react";
import { NavigationArgs } from "#/mocks/data/Navigation";
import NavBar from ".";

const meta = {
  title: "Component/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...NavigationArgs,
  },
};
