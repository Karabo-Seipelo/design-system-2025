import { Meta, StoryObj } from "@storybook/react";
import Artboard from "../../atoms/Artboard/index";
import ProductSpecifications from "./";

const meta: Meta<typeof ProductSpecifications> = {
  title: "E-commerce/ProductSpecifications",
  component: ProductSpecifications,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard>
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof ProductSpecifications>;

export default meta;
type Story = StoryObj<typeof ProductSpecifications>;

const createSpecificantion = (
  name: string,
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  list: {
    icon: string;
    text: string;
  }[],
) => ({
  name,
  title,
  description,
  image: {
    src: imageSrc,
    alt: imageAlt,
  },
  list,
});

const specifications = [
  createSpecificantion(
    "Sustainability",
    "Eco-Friendly Choice",
    "With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.",
    "product-img-main.jpg",
    "Placeholder Image 1",
    [
      { icon: "recycle", text: "Recycled Materials" },
      { icon: "paint", text: "Low Impact Dye" },
      { icon: "plant", text: "Carbon Neutral" },
      { icon: "water", text: "Water Conservation" },
    ],
  ),
  createSpecificantion(
    "Comfort",
    "Uncompromised Comfort",
    "Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.",
    "product-img-main2.jpg",
    "Placeholder Image 2",
    [
      { icon: "t-shirt", text: "Ergonomic Fits" },
      { icon: "hand-heart", text: "Soft-to-the-Touch Fabrics" },
      { icon: "windy", text: "Breathable Weaves" },
      { icon: "color-filter", text: "Thoughtful Design" },
    ],
  ),
  createSpecificantion(
    "Durability",
    "Built to Last",
    "Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.",
    "product-img-main3.jpg",
    "Placeholder Image 2",
    [
      { icon: "stack", text: "Reinforced Construction" },
      { icon: "scales", text: "Quality Control" },
      { icon: "shield-star", text: "Material Resilience" },
      { icon: "price-tag-2", text: "Warranty and Repair" },
    ],
  ),
  createSpecificantion(
    "Versatility",
    "Versatile by Design",
    "Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch.",
    "product-img-main4.jpg",
    "Placeholder Image 2",
    [
      { icon: "rainbow", text: "Adaptive Styles" },
      { icon: "shirt", text: "Functional Fashion" },
      { icon: "plant", text: "Timeless Aesthetics" },
      { icon: "shapes", text: "Mix-and-Match Potential" },
    ],
  ),
];

export const Default: Story = {
  args: {
    title: "Discover timeless elegance",
    description:
      "Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.",
    specifications,
  },
};
