import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from ".";

const meta = {
  title: "Marketing/Hero",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: "Well craft abstract images",
    description:
      "High quality images for your projects, wallpaper and presentations",
    imageUrl: "prism.png",
    buttons: [
      {
        label: "Learn more",
        primary: false,
      },
      {
        label: "See pricing",
        primary: true,
      },
    ],
  },
};

export const FeatureBullets: Story = {
  args: {
    title: "Premium abstract images",
    imageUrl: "prism2.png",
    buttons: [
      {
        label: "Learn more",
        primary: false,
      },
      {
        label: "See pricing",
        primary: true,
      },
    ],
    features: [
      "Minimum 5K image resolution",
      "Various format variants avaliable",
      "Retina display support",
    ],
  },
};
