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
  
  export const BlogCard: Story = {};