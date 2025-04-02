import { Meta, StoryObj } from "@storybook/react";
import QuantitySelector from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Molecules/QuantitySelector",
  component: QuantitySelector,
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
} satisfies Meta<typeof QuantitySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: {
    name: "quantity",
    initialQuantity: 2,
    outOfStock: false,
    min: 1,
    max: 10,
    increment: 1,
    decrement: 1,
  },
  render: (args) => (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-2">
        <h2>Normal</h2>
        <QuantitySelector {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <h2>Increment disabled</h2>
        <QuantitySelector
          name="quantity"
          initialQuantity={0}
          outOfStock={false}
          min={1}
          max={10}
          increment={0}
          decrement={1}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2>Decrement disabled</h2>
        <QuantitySelector
          name="quantity"
          initialQuantity={2}
          outOfStock={false}
          min={1}
          max={2}
          increment={1}
          decrement={1}
        />
      </div>
    </div>
  ),
};
