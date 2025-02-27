import type { Meta, StoryObj } from "@storybook/react";
import StatisticsSection from ".";

const meta = {
  title: "Marketing/Section/Statistics",
  component: StatisticsSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StatisticsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "More than premium abstract imagery",
    subTitle: "Statistics",
    description:
      "Our platform is more than just as a service to us - it is a catalyst for enriching lives through premium abstract imagery.",
    imageUrl: "white-blocks.png",
    statisticsTitle: "Our mission, in numbers",
    statistics: [
      {
        statistic: "25,664,890",
        label: "Downloads",
      },
      {
        statistic: "17,219",
        label: "Paid users",
      },
      {
        statistic: "190,654,321",
        label: "Images in library",
      },
    ],
  },
};
