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
      <Artboard>
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: "urban-drift-bucket-hat",
  },
};
