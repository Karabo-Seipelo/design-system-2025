import type { Meta, StoryObj } from "@storybook/react";
import PricingTier from ".";
import { TierPricingArgs } from "#/mocks/data/Section/PricingTable";
import Artboard from "../../../atoms/artboard";

const meta = {
  title: "Marketing/Section/Pricing/Tier",
  component: PricingTier,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof PricingTier>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tiers: Story = {
  args: { ...TierPricingArgs },
};
