import type { Meta, StoryObj } from "@storybook/react";
import Card, { SocialIcons } from "./index";

const meta = {
  title: "Marketing/Card/Profile",
  component: Card,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
    jest: ["index.test.tsx"],
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "184px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "profile.png",
    description:
      "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
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
      label: "Contact me",
    },
  },
};
