import type { Meta, StoryObj } from "@storybook/react";
import {
  FeatureSectionRightArgs,
  FeatureSectionLeftArgs,
  FeatureSectionGridArgs,
} from "../../../lib/mocks/data/Section/Feature/index";
import Artboard from "../../atoms/artboard";
import FeaturesSection from ".";

const meta = {
  title: "Marketing/Section/Features",
  component: FeaturesSection,
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
} satisfies Meta<typeof FeaturesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionRight: Story = {
  args: { ...FeatureSectionRightArgs },
};

export const SectionLeft: Story = {
  args: { ...FeatureSectionLeftArgs },
};

export const SectionGrid: Story = {
  args: { ...FeatureSectionGridArgs },
};
