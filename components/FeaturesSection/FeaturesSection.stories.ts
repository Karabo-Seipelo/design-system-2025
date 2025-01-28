import type { Meta, StoryObj } from '@storybook/react';
import FeaturesSection from '.';

const meta = {
    title: 'Components/FeaturesSection',
    component: FeaturesSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof FeaturesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureSectionRight: Story = {
    args: {
        imageUrl: "hero-img.png",
    }
};