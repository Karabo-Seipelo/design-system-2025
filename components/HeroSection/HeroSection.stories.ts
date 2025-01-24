import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '.';

const meta = {
    title: 'Components/HeroSection',
    component: HeroSection,
    tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        title: "Well craft abstract images",
        description: "High quality images for your projects, wallpaper and presentations",
        imageUrl: "prism.png",
        buttons: [
            {
                label: "Learn more",
                primary: false
            },
            {
                label: "See pricing",
                primary: true
            }
        ]
    }
};