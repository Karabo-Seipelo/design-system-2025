import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "../../atoms/Artboard";
import Footer from ".";

const meta = {
  title: "Marketing/Section/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[286px] px-0 gap-10">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        label: "Features",
        href: "/",
      },
      {
        label: "Pricing",
        href: "/",
      },
      {
        label: "About us",
        href: "/",
      },
      {
        label: "Contact",
        href: "/",
      },
    ],
    socails: [
      {
        label: "Youtube",
        href: "/",
        icon: "youtube",
      },
      {
        label: "Instagram",
        href: "/",
        icon: "instagram",
      },
      {
        label: "Facebook",
        href: "/",
        icon: "facebook",
      },
      {
        label: "Github",
        href: "/",
        icon: "github",
      },
      {
        label: "Twitter",
        href: "/",
        icon: "twitter",
      },
    ],
    copyright: "&copy; 2024 Abstractly, Inc. All rights reserved.",
  },
};
