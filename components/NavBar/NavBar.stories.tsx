import type { Meta, StoryObj } from "@storybook/react";
import NavBar from ".";

const meta = {
  title: "Component/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Nav = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

const CallToAction = [
  { name: "Learn more", mobileName: "Learn more", href: "#", primary: false },
  { name: "See pricing", mobileName: "Try it out", href: "#", primary: true },
];

export const Default: Story = {
  args: {
    navItems: Nav,
    brand: {
      name: "Abstractly",
      imageUrl: "/abstractly.svg",
      href: "#",
    },
    callToAction: CallToAction,
  },
};
