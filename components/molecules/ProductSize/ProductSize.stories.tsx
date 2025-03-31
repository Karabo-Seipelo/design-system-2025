import type { Meta, StoryObj } from "@storybook/react";
import ProductSize from ".";
import Artboard from "$/atoms/Artboard/index";

const meta = {
  title: "E-commerce/ProductDetails/ProductSize",
  component: ProductSize,
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
} satisfies Meta<typeof ProductSize>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = ["XS", "S", "M", "L", "XL"];
const sizesNumbers = [
  4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
];

const inventory = {
  sku: "vh-green-xl",
  color: "green",
  size: "xl",
  list_price: 95,
  discount: null,
  discount_percentage: null,
  sale_price: 76,
  sold: 65,
  stock: 435,
};

export const Default: Story = {
  args: {
    sizes,
    selected: (state) => {
      console.log(state);
    },
    classes: "flex flex-col gap-4",
    inventory: inventory,
    outOfStock: [],
    unavailableSizes: {},
  },
};

export const Numbers: Story = {
  args: {
    sizes: sizesNumbers,
    selected: (state) => {
      console.log(state);
    },
    classes: "flex flex-col gap-4",
    inventory: inventory,
    outOfStock: [],
    unavailableSizes: {},
  },
};

export const OutOfStock: Story = {
  args: {
    sizes: sizesNumbers,
    selected: (state) => {
      console.log(state);
    },
    classes: "flex flex-col gap-4",
    inventory: inventory,
    outOfStock: [],
    unavailableSizes: {
      green: [7, 7.5, 8, 8.5, 9, 9.5],
    },
  },
};
