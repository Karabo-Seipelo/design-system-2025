import type { Meta, StoryObj } from "@storybook/react";
import PricingTable from ".";
import { SinglePricingArgs } from "#/mocks/data/Section/PricingTable";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Marketing/Section/Pricing/Single",
  component: PricingTable,
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
} satisfies Meta<typeof PricingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: { ...SinglePricingArgs },
};
