import { Meta, StoryObj } from "@storybook/react";
import { uniqueId } from "lodash";
import { ButtonVariant, ButtonTypeEnum } from "$/atoms/Button/interfaces";
import ProductDetails from ".";
import specificationData from "./specificationData.json";

const meta = {
  title: "E-commerce/Pages/ProductDetails",
  component: ProductDetails,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const createSpecification = (
  name: string,
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  listItems: { icon: string; text: string }[],
) => ({
  name,
  title,
  description,
  image: {
    src: imageSrc,
    alt: imageAlt,
  },
  list: listItems.map((item) => ({
    icon: item.icon,
    text: item.text,
  })),
});

const specifications = specificationData.map((spec) =>
  createSpecification(
    spec.name,
    spec.title,
    spec.description,
    spec.imageSrc,
    spec.imageAlt,
    spec.listItems,
  ),
);

const createFooterColumn = (
  title: string,
  items: { text: string; url: string }[],
) => ({
  id: uniqueId(),
  title,
  items: items.map((item) => ({
    id: uniqueId(),
    ...item,
  })),
});

const SOCIAL_LINKS = [
  { name: "youtube", url: "https://www.youtube.com" },
  { name: "instagram", url: "https://www.instagram.com" },
  { name: "facebook", url: "https://www.facebook.com" },
  { name: "github", url: "https://www.github.com" },
  { name: "twitter", url: "https://www.twitter.com" },
];

const SOCIAL_LINK_SIZE = "large";
const SOCIAL_LINK_COLOR = "neutral";

const socialLinks = SOCIAL_LINKS.map((link) => ({
  id: uniqueId(),
  name: link.name,
  size: SOCIAL_LINK_SIZE,
  color: SOCIAL_LINK_COLOR,
  url: link.url,
}));

const footerColumns = [
  createFooterColumn("shop categories", [
    { text: "unisex", url: "https://www.stylenest.com/unisex" },
    { text: "women", url: "https://www.stylenest.com/unisex" },
    { text: "men", url: "https://www.stylenest.com/unisex" },
  ]),
  createFooterColumn("shop collections", [
    { text: "Latest arrivals", url: "https://www.stylenest.com/unisex" },
    { text: "Urban Oasis", url: "https://www.stylenest.com/unisex" },
    { text: "Cozy Comfort", url: "https://www.stylenest.com/unisex" },
    { text: "Fresh Fusion", url: "https://www.stylenest.com/unisex" },
  ]),
];

export const Default: Story = {
  args: {
    nav: {
      navItems: [
        { name: "Shop all", href: "/shop" },
        { name: "Latest arrivals", href: "/latest-arrivals" },
      ],
      brand: {
        name: "StyleNest",
        imageUrl: "/styleNest.png",
        href: "#",
      },
      cart: true,
    },
    productDetails: {
      productId: "voyager-hoodie",
      locale: "en-US",
      currency: "USD",
    },
    productSpecification: {
      title: "Discover timeless elegance",
      description:
        "Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.",
      specifications,
    },
    collection: {
      title: "In this collection",
      collection: "urban",
    },
    footer: {
      form: {
        title: "Join our newsletter",
        description: "We’ll send you a nice letter once per week. No spam.",
        formUrl:
          "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        onSubmit: async (email: string) => {
          console.log("Form submitted with email:", email);
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
          variant: ButtonVariant.PRIMARY,
          type: ButtonTypeEnum.SUBMIT,
        },
        toast: {
          success: {
            badge: "Success",
            message: "You have successfully subscribed to our newsletter.",
            status: "SUCCESS",
          },
          error: {
            badge: "Error",
            message: "There was an error subscribing to the newsletter.",
            status: "ERROR",
          },
        },
      },
      trademark: {
        logo: {
          image_url: "styleNest.png",
          alt: "StyleNest Logo",
        },
        description:
          "Craft stunning style journeys that weave<br/> more joy into every thread.",
      },
      columns: footerColumns,
      socialAndTerms: {
        description: "&copy; 2024 StyleNest, Inc. All rights reserved.",
        socialLinks,
      },
    },
  },
};
