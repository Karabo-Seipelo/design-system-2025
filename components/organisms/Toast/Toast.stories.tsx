import type { Meta, StoryObj } from "@storybook/react";
import Toast from ".";
import useToast from "./useToast";

const meta = {
  title: "Component/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen bg-gray-100">
        <div className="flex h-full flex-col items-start lg:items-center lg:justify-center py-[264px] px-[16px] md:py-[356px] md:px-[8px] lg:py-[196px] lg:px-[8px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessToast: Story = {
  args: {
    badge: "Success",
    message: "Subscription successful! Please check your email to confirm.",
    status: "SUCCESS",
  },
  render: (args) => {
    const { showToast } = useToast();
    const { badge, message, status } = args;
    return (
      <>
        <Toast {...args} />
        <button
          onClick={() => showToast(message, status, badge)}
          className="flex justify-center items-center gap-1.5 px-4 py-2.5 rounded bg-indigo-700 text-white"
        >
          Show Toast
        </button>
      </>
    );
  },
};

export const ErrorToast: Story = {
  args: {
    badge: "Error",
    message: "Subscription failed. Please try again.",
    status: "ERROR",
  },
  render: (args) => {
    const { showToast } = useToast();
    const { badge, message, status } = args;
    return (
      <>
        <Toast {...args} />
        <button
          onClick={() => showToast(message, status, badge)}
          className="flex justify-center items-center gap-1.5 px-4 py-2.5 rounded bg-indigo-700 text-white"
        >
          Show Toast
        </button>
      </>
    );
  },
};
