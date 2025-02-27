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

export const Default: TestimonialStory = {
  args: {
    subTitle: "Testimonials",
    title: "Countless users, countless smiles",
    description:
      "Explore our community's journey and discover why satisfaction defines us.",
    testimonials: [
      {
        firstName: "Sarah",
        lastName: "Dole",
        handle: "@sarahdole",
        testimonial:
          "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
        avatar: {
          imageUrl: "profile.png",
          alt: "Sarah Dole",
        },
      },
      {
        firstName: "John",
        lastName: "Appleseed",
        handle: "@johnaseed",
        testimonial:
          "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
        avatar: {
          imageUrl: "profile-thumbnail_1.jpg",
          alt: "John Appleseed",
        },
      },
      {
        firstName: "Jean",
        lastName: "Gray",
        handle: "@jeniic",
        testimonial:
          "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
        avatar: {
          imageUrl: "profile-thumbnail_2.jpg",
          alt: "Jean Gray",
        },
      },
      {
        firstName: "Jake",
        lastName: "Johnson",
        handle: "@jakejohnshon",
        testimonial:
          "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
        avatar: {
          imageUrl: "profile-thumbnail_3.jpg",
          alt: "Jake Johnson",
        },
      },
      {
        firstName: "Igor",
        lastName: "Stravinsky",
        handle: "@igorstrav",
        testimonial:
          "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
        avatar: {
          imageUrl: "profile-thumbnail_4.jpg",
          alt: "Igor Stravinsky",
        },
      },
      {
        firstName: "Declan",
        lastName: "Rice",
        handle: "@drice",
        testimonial:
          "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
        avatar: {
          imageUrl: "profile-thumbnail_5.jpg",
          alt: "Declan Rice",
        },
      },
      {
        firstName: "Marcus",
        lastName: "Thompson",
        handle: "@mthompson",
        testimonial:
          "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
        avatar: {
          imageUrl: "profile-thumbnail_6.jpg",
          alt: "Marcus Thompson",
        },
      },
      {
        firstName: "Oliver",
        lastName: "Neverloved",
        handle: "@olivernever",
        testimonial:
          "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
        avatar: {
          imageUrl: "profile-thumbnail_7.jpg",
          alt: "Oliver Neverloved",
        },
      },
      {
        firstName: "Mark",
        lastName: "Dennis",
        handle: "@marked",
        testimonial:
          "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
        avatar: {
          imageUrl: "profile-thumbnail_8.jpg",
          alt: "Mark Dennis",
        },
      },
    ],
  },
};
