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
  
  export const BlogCard: Story = {
    args: {
      imageUrl: "spacejoy-YqFz7UMm8qE-unsplash.jpg",
      title: 'How to create a cozy living room',
      post: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
      link: {
        href: 'https://www.spacejoy.com',
        label: 'Read more',
      },
    }
  };
