import { Meta, StoryObj } from "@storybook/react";
import { uniqueId } from "lodash";
import { ButtonVariant, ButtonTypeEnum } from "$/atoms/Button/interfaces";
import ProductDetails from ".";

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
      specifications: [
        {
          name: "Sustainability",
          title: "Eco-Friendly Choice",
          description:
            "With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.",
          image: {
            src: "product-img-main.jpg",
            alt: "Placeholder Image 1",
          },
          list: [
            {
              icon: "recycle",
              text: "Recycled Materials",
            },
            {
              icon: "paint",
              text: "Low Impact Dye",
            },
            {
              icon: "plant",
              text: "Carbon Neutral",
            },
            {
              icon: "water",
              text: "Water Conservation",
            },
          ],
        },
        {
          name: "Comfort",
          title: "Uncompromised Comfort",
          description:
            "Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.",
          image: {
            src: "product-img-main2.jpg",
            alt: "Placeholder Image 2",
          },
          list: [
            {
              icon: "t-shirt",
              text: "Ergonomic Fits",
            },
            {
              icon: "hand-heart",
              text: "Soft-to-the-Touch Fabrics",
            },
            {
              icon: "windy",
              text: "Breathable Weaves",
            },
            {
              icon: "color-filter",
              text: "Thoughtful Design",
            },
          ],
        },
        {
          name: "Durability",
          title: "Built to Last",
          description:
            "Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.",
          image: {
            src: "product-img-main3.jpg",
            alt: "Placeholder Image 3",
          },
          list: [
            {
              icon: "stack",
              text: "Reinforced Construction",
            },
            {
              icon: "scales",
              text: "Quality Control",
            },
            {
              icon: "shield-star",
              text: "Material Resilience",
            },
            {
              icon: "price-tag-2",
              text: "Warranty and Repair",
            },
          ],
        },
        {
          name: "Versatility",
          title: "Versatile by Design",
          description:
            "Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch.",
          image: {
            src: "product-img-main4.jpg",
            alt: "Placeholder Image 4",
          },
          list: [
            {
              icon: "rainbow",
              text: "Adaptive Styles",
            },
            {
              icon: "shirt",
              text: "Functional Fashion",
            },
            {
              icon: "plant",
              text: "Timeless Aesthetics",
            },
            {
              icon: "shapes",
              text: "Mix-and-Match Potential",
            },
          ],
        },
      ],
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
      columns: [
        {
          id: uniqueId(),
          title: "shop categories",
          items: [
            {
              id: uniqueId(),
              text: "unisex",
              url: "https://www.stylenest.com/unisex",
            },
            {
              id: uniqueId(),
              text: "women",
              url: "https://www.stylenest.com/unisex",
            },
            {
              id: uniqueId(),
              text: "men",
              url: "https://www.stylenest.com/unisex",
            },
          ],
        },
        {
          id: uniqueId(),
          title: "shop collections",
          items: [
            {
              id: uniqueId(),
              text: "Latest arrivals",
              url: "https://www.stylenest.com/unisex",
            },
            {
              id: uniqueId(),
              text: "Urban Oasis",
              url: "https://www.stylenest.com/unisex",
            },
            {
              id: uniqueId(),
              text: "Cozy Comfort",
              url: "https://www.stylenest.com/unisex",
            },
            {
              id: uniqueId(),
              text: "Fresh Fusion",
              url: "https://www.stylenest.com/unisex",
            },
          ],
        },
      ],
      socialAndTerms: {
        description: "&copy; 2024 StyleNest, Inc. All rights reserved.",
        socialLinks: [
          {
            id: uniqueId(),
            name: "youtube",
            size: "large",
            color: "neutral",
            url: "https://www.youtube.com",
          },
          {
            id: uniqueId(),
            name: "instagram",
            size: "large",
            color: "neutral",
            url: "https://www.youtube.com",
          },
          {
            id: uniqueId(),
            name: "facebook",
            size: "large",
            color: "neutral",
            url: "https://www.youtube.com",
          },
          {
            id: uniqueId(),
            name: "github",
            size: "large",
            color: "neutral",
            url: "https://www.youtube.com",
          },
          {
            id: uniqueId(),
            name: "twitter",
            size: "large",
            color: "neutral",
            url: "https://www.youtube.com",
          },
        ],
      },
    },
  },
};
