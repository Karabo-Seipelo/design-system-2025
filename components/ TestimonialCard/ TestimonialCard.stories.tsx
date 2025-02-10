import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autdocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "200px"}}>
        <Story />
      </div>
    ),
  ]
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
      classes: 'w-12 h-12 object-cover',
    }
  }
};
