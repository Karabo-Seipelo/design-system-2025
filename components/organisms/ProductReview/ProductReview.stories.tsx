import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ProductReview from ".";

const meta = {
  title: "E-commerce/ProductReview",
  component: ProductReview,
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
  args: {
    title: "Overall Rating",
    isOpen: false,
    productId: "voyager-hoodie",
    close: () => {
      console.warn("close");
    },
  },
} satisfies Meta<typeof ProductReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return (
      <>
        <button
          className="flex justify-center items-center gap-1.5 px-4 py-2.5 rounded bg-indigo-700 text-white"
          onClick={open}
        >
          Open Product Review Dialog
        </button>
        <ProductReview {...args} isOpen={isOpen} close={close} />
      </>
    );
  },
};
