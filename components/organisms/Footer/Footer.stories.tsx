import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "../../atoms/artboard";
import Footer from ".";
import { FooterArgs } from "#/mocks/data/Section/Footer/index";

const meta = {
  title: "Marketing/Section/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[286px] px-0 gap-10">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...FooterArgs,
  },
};
