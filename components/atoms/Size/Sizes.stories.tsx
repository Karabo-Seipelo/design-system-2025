import { Meta, StoryObj } from "@storybook/react";
import Size from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/Size",
  component: Size,
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
} satisfies Meta<typeof Size>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: {
    name: "size",
    size: "M",
    variant: "default",
    active: false,
    isOutOfStock: false,
  },
  render: (args) => (
    <div data-testid="all-states" className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-2">
        <div>Normal</div>
        <div>
          <Size {...args} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Hover</div>
        <div>
          <Size
            name="size"
            size="M"
            variant="hover"
            active={false}
            isOutOfStock={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Focus</div>
        <div>
          <Size
            name="size"
            size="M"
            variant="hover"
            active={false}
            isOutOfStock={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Seleceted</div>
        <div>
          <Size
            name="size"
            size="M"
            variant="selected"
            active={true}
            isOutOfStock={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Out-of-stock</div>
        <div>
          <Size name="size" size="M" active={false} isOutOfStock={true} />
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    name: "size",
    size: "M",
    variant: "default",
    active: false,
    isOutOfStock: false,
  },
};

export const Active: Story = {
  args: {
    name: "size",
    size: "M",
    variant: "default",
    active: true,
    isOutOfStock: false,
  },
};

export const Disabled: Story = {
  args: {
    name: "size",
    size: "M",
    variant: "default",
    active: false,
    isOutOfStock: true,
  },
};
