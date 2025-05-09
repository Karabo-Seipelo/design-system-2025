import { Meta, StoryObj } from "@storybook/react";
import Artboard from "../../atoms/Artboard/index";
import ProductSpecifications from "./";
import Specification from "./specification.json";

const meta: Meta<typeof ProductSpecifications> = {
  title: "E-commerce/ProductSpecifications",
  component: ProductSpecifications,
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

const specifications = Specification[0].specifications.map((specification) =>
  createSpecificantion(
    specification.name,
    specification.title,
    specification.description,
    specification.image.src,
    specification.image.alt,
    specification.list,
  ),
);

export const Default: Story = {
  args: {
    title: "Discover timeless elegance",
    description:
      "Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.",
    specifications,
  },
};
