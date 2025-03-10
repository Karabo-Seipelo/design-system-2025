import type { Meta, StoryObj } from "@storybook/react";
import PricingTier from ".";
import { TierPricingArgs } from "../../../../__mocks__/data/Section/PricingTable";

const meta = {
  title: "Marketing/Section/Pricing/Tier",
  component: PricingTier,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PricingTier>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tiers: Story = {
  args: { ...TierPricingArgs },
};
