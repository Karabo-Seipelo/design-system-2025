import type { Meta, StoryObj } from '@storybook/react';
import results from "./../../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";
import Card from '.';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autdocs'],
  parameters: {
    layout: 'centered',
    jest: ['index.test.tsx']
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "200px"}}>
        <Story />
      </div>
    ),
    withTests({ results })
  ],
} satisfies Meta<typeof Card>;

export default meta;
type TestimonialStory = StoryObj<typeof meta>;

export const Testimonial: TestimonialStory = {
  args: {
    firstName: 'Sarah',
    lastName: 'Dole',
    handle: '@sarahdole',
    testimonial: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: {
      imageUrl: 'profile.png',
      alt: "Sarah Dole"
    }
  }
};

export const TestimonialWithoutHandle: TestimonialStory = {
  args: {
    firstName: 'Sarah',
    lastName: 'Dole',
    testimonial: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: {
      imageUrl: 'profile.png',
      alt: "Sarah Dole"
    }
  }
};

export const TestimonialWithoutLastname: TestimonialStory = {
  args: {
    firstName: 'Sarah',
    lastName: undefined,
    handle: '@sarahdole',
    testimonial: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: {
      imageUrl: 'profile.png',
      alt: "Sarah Dole"
    }
  }
};
