import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta = {
    title: 'components/Card',
    component: Card,
    tags: ['autdocs'],
    parameters: {
      layout: 'centered',
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCard: Story = {
    args: {
        imageUrl: "profile.png",
        description: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
        role: "Front End Engineer @ Microsoft",
        name: "Sarah Dole"
    }
};