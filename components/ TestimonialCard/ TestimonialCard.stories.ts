import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autdocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Testimonial: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    handle: '@johndoe',
    testimonial: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: {
      imageUrl: 'https://avatar.iran.liara.run/public/14',
      alt: 'John Doe',
      classes: 'w-12 h-12 object-cover',
    }
  }
};
