import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationArgs,
  NavigationWithDropDownArgs,
  EcommerceNavArgs,
} from "#/mocks/data/Navigation";
import Nav from ".";

const meta = {
  title: "Component/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...NavigationArgs,
  },
};

export const WithDropDown: Story = {
  args: {
    ...NavigationWithDropDownArgs,
  },
};

export const EcommerceNav: Story = {
  args: {
    ...EcommerceNavArgs,
  },
};
