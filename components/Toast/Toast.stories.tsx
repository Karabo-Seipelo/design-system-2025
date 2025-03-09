import type { Meta, StoryObj } from "@storybook/react";
import Toast from ".";

const meta = {
  title: "Component/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    badge: "Success",
    message: "Subscription successful! Please check your email to confirm.",
    status: "SUCCESS",
  },
};

export const Error: Story = {
  args: {
    badge: "Error",
    message: "Subscription failed. Please try again.",
    status: "ERROR",
  },
};
