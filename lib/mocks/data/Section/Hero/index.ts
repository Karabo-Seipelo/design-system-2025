import { HeroSectionProps } from "../../../../../components/Section/Hero";

export const HeroBulletsArgs: HeroSectionProps = {
  title: "Premium abstract images",
  imageUrl: "/prism2.png",
  buttons: [
    {
      label: "Learn more",
      primary: false,
    },
    {
      label: "See pricing",
      primary: true,
    },
  ],
  features: [
    "Minimum 5K image resolution",
    "Various format variants avaliable",
    "Retina display support",
  ],
};

export const HeroSimpleArgs: HeroSectionProps = {
  title: "Well craft abstract images",
  description:
    "High quality images for your projects, wallpaper and presentations",
  imageUrl: "/prism.png",
  buttons: [
    {
      label: "Learn more",
      primary: false,
    },
    {
      label: "See pricing",
      primary: true,
    },
  ],
};
