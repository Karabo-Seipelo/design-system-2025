import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";

const meta = {
  title: "E-commerce/Card/Product",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    collectionId: "cozy",
    name: "Cozy Comfort",
    description: "Plush fabrics and soothing designs",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/cozy-comfort.jpg",
    layout: "primary",
  },
};

export const Secondary: Story = {
  args: {
    collectionId: "cozy",
    name: "Cozy Comfort",
    description: "Plush fabrics and soothing designs",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/cozy-comfort.jpg",
    layout: "secondary",
  },
};
