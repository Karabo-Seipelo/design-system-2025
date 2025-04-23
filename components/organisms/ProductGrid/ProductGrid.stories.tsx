import { Meta, StoryObj } from "@storybook/react";
import Artboard from "$/atoms/Artboard";
import ProductGrid from ".";

const meta = {
  title: "E-commerce/ProductGrid",
  component: ProductGrid,
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
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
