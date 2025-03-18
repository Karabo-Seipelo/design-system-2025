import type { Meta, StoryObj } from "@storybook/react";
import StatisticsSection from ".";
import { StatisticsArgs } from "#/mocks/data";
import Artboard from "$/atoms/artboard";

const meta = {
  title: "Marketing/Section/Statistics",
  component: StatisticsSection,
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
} satisfies Meta<typeof StatisticsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...StatisticsArgs },
};
