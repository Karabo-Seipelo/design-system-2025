import { Meta, StoryObj } from "@storybook/react";
import Badge from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="p-4">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: {
    discount: 20,
    variant: "default",
  },
  render: (args) => (
    <div data-testid="all-states" className="flex flex-row gap-6">
      <Badge {...args} />
      <Badge discount={20} variant="promo" />
    </div>
  ),
};

export const Default: Story = {
  args: {
    discount: 20,
  },
};

export const Promo: Story = {
  args: {
    discount: 30,
    variant: "promo",
  },
};
