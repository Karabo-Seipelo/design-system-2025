import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ProductColors from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "E-commerce/ProductDetails/ProductColors",
  component: ProductColors,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="md:w-[100%] mx-auto p-4">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof ProductColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Test Product",
    colors: ["green", "brown"],
    selected: (state) => {
      action(`Selected: ${state}`)();
    },
    selectedColor: "green",
    outOfStock: [],
  },
};

export const OutOfStock: Story = {
  args: {
    name: "Test Product",
    colors: ["green", "brown"],
    selected: (state) => {
      action(`Selected: ${state}`)();
    },
    selectedColor: "green",
    outOfStock: ["brown"],
  },
};
