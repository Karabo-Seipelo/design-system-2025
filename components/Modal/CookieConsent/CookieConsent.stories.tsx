import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CookieConsent from ".";

const meta = {
  title: "Marketing/Modal/CookieConsent",
  component: CookieConsent,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: fn(),
  },
};
