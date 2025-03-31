import type { Meta, StoryObj } from "@storybook/react";
import ProductInfo from ".";
import Artboard from "$/atoms/Artboard/index";

const meta = {
  title: "E-commerce/ProductDetails/ProductInfo",
  component: ProductInfo,
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
} satisfies Meta<typeof ProductInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

const info = [
  {
    title: "Features",
    description: [
      "Designed for comfort and durability.",
      "Soft, breathable fabric ideal for travel and adventure.",
      "Large front pocket and adjustable hood.",
      "Minimalist design pairs well with any style.",
      "Made with eco-conscious materials.",
    ],
  },
  {
    title: "Fabric & Care",
    description: [
      "Machine wash cold on a gentle cycle.",
      "Tumble dry low or hang to dry.",
      "Do not use fabric softeners or bleach.",
      "Iron on a low setting if necessary.",
    ],
  },
  {
    title: "Shipping",
    description: [
      "Free standard shipping on all orders - no minimum spend required.",
      "Expedited shipping available at an additional cost.",
      "Packaged in biodegradable materials to reduce environmental impact.",
    ],
  },
];

export const Default: Story = {
  args: {
    info: info,
  },
};
