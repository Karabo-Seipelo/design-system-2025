import type { Meta, StoryObj } from "@storybook/react";
import ProductQuantity from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "E-commerce/ProductDetails/ProductQuantity",
  component: ProductQuantity,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="md:w-[50%] mx-auto p-4">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof ProductQuantity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Quantity",
    initialQuantity: 1,
    selected: (state) => {
      console.log(state);
    },
    stock: 10,
    outOfStock: false,
  },
};

export const OutOfStock: Story = {
  args: {
    name: "Quantity",
    initialQuantity: 1,
    selected: (state) => {
      console.log(state);
    },
    stock: 10,
    outOfStock: true,
  },
};
