import { AboutUsPageProps } from "$/pages";
import {
  NavigationArgs,
  HeroSimpleArgs,
  StatisticsArgs,
  TeamArgs,
  FooterArgs,
  ContactArgs,
} from "../index";

export const AboutUsPageArgs: AboutUsPageProps = {
  nav: { ...NavigationArgs },
  hero: {
    ...HeroSimpleArgs,
    title: "From a tiny desk to the entire world",
    description:
      "As a lean, passionate team, we've made something that most would think is impossible - premium abstract images for free and for all.",
    buttons: [
      {
        label: "Features",
        primary: false,
      },
      {
        label: "See pricing",
        primary: true,
      },
    ],
  },
  statistics: { ...StatisticsArgs },
  team: { ...TeamArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
