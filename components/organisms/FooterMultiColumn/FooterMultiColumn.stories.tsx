import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "$/atoms/Artboard/index";
import FooterMultiColumn from ".";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "E-commerce/FooterMultiColumn",
  component: FooterMultiColumn,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[48px] md:py-[64px] lg:p-[96px]">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof FooterMultiColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    form: {
      title: "Join our newsletter",
      description:
        "Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.",
      onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        action("onSubmit")();
      },
      input: {
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        required: true,
        "aria-label": "Email",
        className: "basis-full md:basis-[80%]",
      },
      button: {
        label: "Subscribe",
        variant: "primary",
        type: "submit",
      },
    },
    columns: [
      {
        logo: {
          image_url: "styleNest.png",
          alt: "StyleNest Logo",
        },
        description:
          "Craft stunning style journeys that weave more joy into every thread.",
      },
      {
        title: "shop categories",
        items: [
          {
            text: "unisex",
            link: "https://www.stylenest.com/unisex",
          },
          {
            text: "women",
            link: "https://www.stylenest.com/unisex",
          },
          {
            text: "men",
            link: "https://www.stylenest.com/unisex",
          },
        ],
      },
      {
        title: "shop collections",
        items: [
          {
            text: "Latest arrivals",
            link: "https://www.stylenest.com/unisex",
          },
          {
            text: "Urban Oasis",
            link: "https://www.stylenest.com/unisex",
          },
          {
            text: "Cozy Comfort",
            link: "https://www.stylenest.com/unisex",
          },
          {
            text: "Fresh Fusion",
            link: "https://www.stylenest.com/unisex",
          },
        ],
      },
    ],
    socialAndTerms: {
      description: "&copy; 2024 StyleNest, Inc. All rights reserved.",
      socialLinks: [
        {
          name: "youtube",
          size: "large",
          color: "neutral",
          url: "https://www.youtube.com",
        },
        {
          name: "instagram",
          size: "large",
          color: "neutral",
          url: "https://www.youtube.com",
        },
        {
          name: "facebook",
          size: "large",
          color: "neutral",
          url: "https://www.youtube.com",
        },
        {
          name: "github",
          size: "large",
          color: "neutral",
          url: "https://www.youtube.com",
        },
        {
          name: "twitter",
          size: "large",
          color: "neutral",
          url: "https://www.youtube.com",
        },
      ],
    },
  },
};
