import type { Meta, StoryObj } from "@storybook/react";
import CookieConsent from ".";

const meta = {
  title: "Marketing/Modal/CookieConsent",
  component: CookieConsent,
  tags: ["autdocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "We use cookies",
    description:
      "We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our cookie policy.",
    modal: {
      cookies: [
        {
          name: "essential",
          description:
            "These cookies are essential for the proper functioning of our services and cannot be disabled.",
        },
        {
          name: "analytics",
          description:
            "These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.",
        },
        {
          name: "marketing",
          description:
            "These cookies allow us to show you advertisements relevant to you through our advertising partners.",
        },
      ],
      buttons: [
        {
          label: "Accept all",
          type: "acceptModal",
          groupWithNext: true,
        },
        {
          label: "Save",
          type: "saveModal",
        },
        {
          label: "Decline all",
          type: "declineModal",
        },
      ],
    },
    buttons: [
      {
        label: "Decline all",
        type: "decline",
      },
      {
        label: "Allow cookies",
        type: "accept",
        groupWithNext: true,
      },
      {
        label: "Manage cookies",
        type: "manage",
      },
    ],
  },
};
