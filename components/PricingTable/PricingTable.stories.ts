import type { Meta, StoryObj } from "@storybook/react";
import PricingTable from ".";

const meta = {
  title: "Marketing/PricingTable",
  component: PricingTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PricingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    title: "Pay as you need",
    description:
      "We offer one-time purchases with credits, for you to use as needed. Always active.",
    subTitle: "One time purchase",
    featureTitle: "Unlock creativity once, enjoy forever",
    features: [
      "128 available credits for all images",
      "Up to 3 users",
      "24 hour response time",
      "Advanced analytics",
    ],
    prices: [
      {
        tag: "Popular",
        price: "$699",
        description: "Prices in USD",
        priceType: "Pay once, use it forever. No strings attached.",
        buttons: [
          {
            label: "Buy now",
            primary: true,
          },
        ],
      },
    ],
  },
};
