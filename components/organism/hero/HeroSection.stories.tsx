import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "$/atoms/artboard";
import { HeroBulletsArgs, HeroSimpleArgs } from "#/mocks/data/Section/Hero";
import HeroSection from ".";

const meta = {
  title: "Marketing/Section/Hero",
  component: HeroSection,
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
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: { ...HeroSimpleArgs },
};

export const FeatureBullets: Story = {
  args: { ...HeroBulletsArgs },
};
