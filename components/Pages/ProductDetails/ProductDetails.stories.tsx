import { Meta, StoryObj } from "@storybook/react";
import ProductDetails from ".";
import Artboard from "$/atoms/Artboard/index";

const meta = {
  title: "E-commerce/Pages/ProductDetails",
  component: ProductDetails,
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
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
