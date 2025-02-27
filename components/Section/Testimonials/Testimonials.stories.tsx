import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from ".";

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
    testimonials: [
      createTestimonial(
        "Sarah",
        "Dole",
        "@sarahdole",
        "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
        "profile.png",
        "Sarah Dole",
      ),
      createTestimonial(
        "John",
        "Appleseed",
        "@johnaseed",
        "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
        "profile-thumbnail_1.jpg",
        "John Appleseed",
      ),
      createTestimonial(
        "Jean",
        "Gray",
        "@jeniic",
        "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
        "profile-thumbnail_2.jpg",
        "Jean Gray",
      ),
      createTestimonial(
        "Jake",
        "Johnson",
        "@jakejohnshon",
        "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
        "profile-thumbnail_3.jpg",
        "Jake Johnson",
      ),
      createTestimonial(
        "Igor",
        "Stravinsky",
        "@igorstrav",
        "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
        "profile-thumbnail_4.jpg",
        "Igor Stravinsky",
      ),
      createTestimonial(
        "Declan",
        "Rice",
        "@drice",
        "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
        "profile-thumbnail_5.jpg",
        "Declan Rice",
      ),
      createTestimonial(
        "Marcus",
        "Thompson",
        "@mthompson",
        "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
        "profile-thumbnail_6.jpg",
        "Marcus Thompson",
      ),
      createTestimonial(
        "Oliver",
        "Neverloved",
        "@olivernever",
        "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
        "profile-thumbnail_7.jpg",
        "Oliver Neverloved",
      ),
      createTestimonial(
        "Mark",
        "Dennis",
        "@marked",
        "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
        "profile-thumbnail_8.jpg",
        "Mark Dennis",
      ),
    ],
  },
};
