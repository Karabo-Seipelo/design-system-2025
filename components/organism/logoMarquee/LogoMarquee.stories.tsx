import type { Meta, StoryObj } from "@storybook/react";
import LogoMarquee from ".";
import { LogoMarqueeArgs } from "../../../lib/mocks/data/Section/LogoMarquee/index";

const meta = {
  title: "Marketing/LogoMarquee",
  component: LogoMarquee,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
        <div className="flex h-full flex-col items-start lg:items-center lg:justify-center py-[264px] px-[16px] md:py-[356px] md:px-[8px] lg:py-[196px] lg:px-[8px]">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof LogoMarquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...LogoMarqueeArgs },
};
