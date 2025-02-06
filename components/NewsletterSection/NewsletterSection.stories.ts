import type { Meta, StoryObj } from '@storybook/react';
import NewsletterSection from '.';

const meta = {
    title: 'Components/Newsletter',
    component: NewsletterSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof NewsletterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Get the finest curated abstracts delivered weekly to your inbox",
        features: [
            {
                description: "Exclusive access to new abstract images and collections",
                icon: "check-fill.svg"
            },
            {
                description: "Unlock special promotions only for subscribers",
                icon: "check-fill.svg"
            },
            {
                description: "Regular doses of artistic inspiration",
                icon: "check-fill.svg"
            }
        ]
    }
};