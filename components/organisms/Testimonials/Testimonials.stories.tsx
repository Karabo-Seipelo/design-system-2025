import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from ".";
import Artboard from "$/atoms/artboard";
import { TestimonialArgs } from "#/mocks/data";

const meta = {
  title: "Marketing/Section/Testimonials",
  component: Testimonials,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof Testimonials>;

export default meta;
type TestimonialStory = StoryObj<typeof meta>;

export const Default: TestimonialStory = {
  args: { ...TestimonialArgs },
};
