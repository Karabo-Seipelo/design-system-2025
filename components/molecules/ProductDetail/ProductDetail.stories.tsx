import type { Meta, StoryObj } from "@storybook/react";
import ProductDetail from ".";
import Artboard from "$/atoms/Artboard/index";

const meta = {
  title: "E-commerce/ProductDetails/ProductDetail",
  component: ProductDetail,
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
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    name: "Voyager Hoodie",
    description:
      "The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.",
    rating: 4.5,
    reviews: 150,
    inventory: inventory,
    locale: "en-US",
    currency: "USD",
  },
};

export const Discount: Story = {
  args: {
    name: "Voyager Hoodie",
    description:
      "The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.",
    rating: 0,
    reviews: 0,
    inventory: {
      ...inventory,
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 65,
    },
    locale: "en-US",
    currency: "USD",
  },
};
