import type { Meta, StoryObj } from "@storybook/react";
import ProductDetails from ".";
import Artboard from "../../atoms/Artboard/index";

const meta = {
  title: "E-commerce/ProductDetails",
  component: ProductDetails,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[48px] md:py-[64px] lg:p-[96px]">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: "voyager-hoodie",
    locale: "en-US",
    currency: "USD",
  },
};
