import { AboutUsPageProps } from "$/Pages";
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
  hero: { ...HeroSimpleArgs },
  statistics: { ...StatisticsArgs },
  team: { ...TeamArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
