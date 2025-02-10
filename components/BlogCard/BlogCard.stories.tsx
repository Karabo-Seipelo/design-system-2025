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
        <div style={{ marginTop: "120px" }}>
          <Story />
        </div>
      ),
    ]
} satisfies Meta<typeof Card>;
  
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Blog: Story = {
  args: {
    imageUrl: "spacejoy-YqFz7UMm8qE-unsplash.jpg",
    title: 'Top 5 Living Room Inspirations',
    post: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    categories: ['Interior'],
    link: {
      href: 'https://www.spacejoy.com',
      label: 'Read more',
    },
  }
};
