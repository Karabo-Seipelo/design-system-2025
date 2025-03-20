import type { Meta, StoryObj } from "@storybook/react";
import TeamSection from ".";
import { TeamArgs } from "#/mocks/data";
import Artboard from "$/atoms/artboard";

const meta = {
  title: "Marketing/Section/Team",
  component: TeamSection,
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
} satisfies Meta<typeof TeamSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...TeamArgs,
  },
};
