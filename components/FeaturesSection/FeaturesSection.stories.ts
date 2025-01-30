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
        title: "For designers, by designers",
        subTitle: "High quality images",
        description: "Unleash boundless creativity with a large repository of images optimized for designers",
        features: [
            {
                title: "5k resolution support",
                description: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
                icon: "hd-line.svg"
            },
            {
                title: "From water to glass",
                description: "We offer a wide array of abstractions, raning from water to glass, and encompassing various styles including 3D and vector.",
                icon: "water-percent-line.svg"
            },
            {
                title: "Portrait or landscape",
                description: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
                icon: "rainbow-line.svg"
            }
        ]
    }
};

export const FeatureSectionLeft: Story = {
    args: {
        imageUrl: "heroimage2.png",
        title: "Convenience and licensing that empowers",
        subTitle: "Best-in-class support",
        description: "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
        features: [
            {
                title: "Faster downloads",
                description: "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience",
                icon: "rocket-2-line.svg"
            },
            {
                title: "Convenience for teams",
                description: "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
                icon: "p2p-line.svg"
            },
            {
                title: "Royalty-free licensing",
                description: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
                icon: "copyright-line.svg"
            }
        ],
        orientation: "left"
    }
};