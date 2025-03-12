import type { Meta, StoryObj } from "@storybook/react";
import Toast from "$/Toast";
import { MarketingLandingPageArgs } from "#/mocks/data/index";
import MarketingLandingPage from ".";

const meta = {
  title: "Marketing/Pages/MarketingLandingPage",
  component: MarketingLandingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Toast />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof MarketingLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MarketingLandingPageArgs,
  },
  parameters: {
    nextjs: {
      router: {
        pathname: "/",
      }
    }
  }
};
