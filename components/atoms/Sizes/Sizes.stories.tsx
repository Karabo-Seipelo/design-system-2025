import { Meta, StoryObj } from "@storybook/react";
import Sizes from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/Sizes",
  component: Sizes,
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
} satisfies Meta<typeof Sizes>;

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
    <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-2">
        <div>Normal</div>
        <div>
          <Sizes {...args} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Hover</div>
        <div>
          <Sizes
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
          <Sizes
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
          <Sizes
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
          <Sizes name="size" size="M" active={false} isOutOfStock={true} />
        </div>
      </div>
    </div>
  ),
};
