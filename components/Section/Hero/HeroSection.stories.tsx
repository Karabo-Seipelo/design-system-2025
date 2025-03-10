import type { Meta, StoryObj } from "@storybook/react";
import Container from "../../atoms/Container";
import {
  HeroBulletsArgs,
  HeroSimpleArgs,
} from "../../../__mocks__/data/Section/Hero/index";
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
      <Container classes="bg-[linear-gradient(176.17deg,#f9fafb_0.94%,#edf0f3_316.54%)] shadow-xl rounded-sm">
        <Story />
      </Container>
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
