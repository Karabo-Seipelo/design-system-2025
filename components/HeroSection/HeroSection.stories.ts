import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '.';

const meta = {
    title: 'Components/HeroSection',
    component: HeroSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        imageUrl: "prism.png",
    }
};