import type { Meta, StoryObj } from "@storybook/react";
import ProductCarousel from ".";
import Artboard from "$/atoms/Artboard/index";

const meta = {
  title: "E-commerce/ProductDetails/ProductCarousel",
  component: ProductCarousel,
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
} satisfies Meta<typeof ProductCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  {
    color: "green",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg",
  },
  {
    color: "brown",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg",
  },
  {
    color: "green",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-2.jpg",
  },
  {
    color: "green",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-3.jpg",
  },
  {
    color: "green",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-4.jpg",
  },
];

export const Default: Story = {
  args: {
    images,
    loading: false,
    color: "green",
    selected: (state) => {
      console.warn(state);
    },
  },
};
