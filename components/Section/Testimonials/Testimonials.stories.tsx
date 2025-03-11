import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from ".";
import { TestimonialArgs } from "../../../lib/mocks/data/Section/Testimonials/index";

const meta = {
  title: "Marketing/Section/Testimonials",
  component: Testimonials,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type TestimonialStory = StoryObj<typeof meta>;

export const Default: TestimonialStory = {
  args: { ...TestimonialArgs },
};
