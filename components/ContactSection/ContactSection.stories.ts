import type { Meta, StoryObj } from "@storybook/react";
import ContactSection from ".";

const meta = {
    title: "Marketing/Contact",
    component: ContactSection,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Talk to our team",
        description: "We've committed to delivering the support you require to make your experience as smooth as possible.",
        contactDetails: [
            {
                description: "123 Maple Street, Springfield IL, USA",
                icon: "building-line.svg",
            },
            {
                description: "+1 (650) 555-0198",
                icon: "phone-line.svg",
            },
            {
                description: "hello@abstractly",
                icon: "mail-line.svg",
            }
        ]
    }
};