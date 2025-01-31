import type { Meta, StoryObj } from '@storybook/react';
import Card, { SocialIcons } from './index';

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

export const Profile: Story = {
    args: {
        imageUrl: "profile.png",
        description: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
        role: "Front End Engineer @ Microsoft",
        name: "Sarah Dole",
        socials: [
            {
                name: "GitHub",
                url: "22",
                icon: SocialIcons.GitHub,
            },
            {
                name: "LinkedIn",
                url: "22",
                icon: SocialIcons.LinkedIn,
            },
            {
                name: "Instagram",
                url: "22",
                icon: SocialIcons.Instagram,
            },
            {
                name: "X",
                url: "22",
                icon: SocialIcons.X,
            },
        ],
        button: {
            label: "Contact me"
        }
    }
};