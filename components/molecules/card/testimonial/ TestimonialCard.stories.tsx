import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";

const meta = {
  title: "Marketing/Card/Testimonial",
  component: Card,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
    jest: ["index.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "184px" }}>
        <div className="md:w-[340px] mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type TestimonialStory = StoryObj<typeof meta>;

export const Default: TestimonialStory = {
  args: {
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
};

export const WithoutHandle: TestimonialStory = {
  args: {
    firstName: "Sarah",
    lastName: "Dole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: {
      imageUrl: "profile.png",
      alt: "Sarah Dole",
    },
  },
};

export const WithoutLastname: TestimonialStory = {
  args: {
    firstName: "Sarah",
    lastName: undefined,
    handle: "@sarahdole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: {
      imageUrl: "profile.png",
      alt: "Sarah Dole",
    },
  },
};

export const WithoutAvatar: TestimonialStory = {
  args: {
    firstName: "Sarah",
    lastName: "Dole",
    handle: "@sarahdole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
};
