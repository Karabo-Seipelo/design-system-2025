import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from ".";
import testimonialData from "./testimonials.json";

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


const createTestimonial = (
  firstName: string,
  lastName: string,
  handle: string,
  testimonial: string,
  imageUrl: string,
  alt: string,
) => ({
  firstName,
  lastName,
  handle,
  testimonial,
  avatar: {
    imageUrl,
    alt,
  },
});

export const Default: TestimonialStory = {
  args: {
    subTitle: "Testimonials",
    title: "Countless users, countless smiles",
    description:
      "Explore our community's journey and discover why satisfaction defines us.",
    testimonials: testimonialData.map((data) =>
      createTestimonial(
        data.firstName,
        data.lastName,
        data.handle,
        data.testimonial,
        data.imageUrl,
        data.alt,
      ),
    ),
  },
};
