import type { Meta, StoryObj } from "@storybook/react";
import LogoMarquee from ".";

const meta = {
  title: "Marketing/Section/LogoMarquee",
  component: LogoMarquee,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LogoMarquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Used by teams that love",
    logos: [
      {
        imageUrl: "logo.svg",
        alt: "test",
      },
      {
        imageUrl: "logo-2.svg",
        alt: "test",
      },
      {
        imageUrl: "logo-3.svg",
        alt: "test",
      },
      {
        imageUrl: "logo-4.svg",
        alt: "test",
      },
      {
        imageUrl: "logo-5.svg",
        alt: "test",
      },
      {
        imageUrl: "logo-6.svg",
        alt: "test",
      },
      {
        imageUrl: "logo-7.svg",
        alt: "test",
      },
    ],
  },
};
