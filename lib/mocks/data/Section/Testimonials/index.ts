import { TestimonialsProps } from "../../../../../components/Section/Testimonials";
import testimonialData from "../../../../../components/Section/Testimonials/testimonials.json";
import { v4 as uuidv4 } from "uuid";

const createTestimonial = (
  firstName: string,
  lastName: string,
  handle: string,
  testimonial: string,
  imageUrl: string,
  alt: string,
) => ({
  id: uuidv4(),
  firstName,
  lastName,
  handle,
  testimonial,
  avatar: {
    imageUrl,
    alt,
  },
});

export const TestimonialArgs: TestimonialsProps = {
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
};
