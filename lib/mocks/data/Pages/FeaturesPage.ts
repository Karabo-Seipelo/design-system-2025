import { FeaturesPageProps } from "../../../../components/Pages";
import {
  NavigationArgs,
  HeroSimpleArgs,
  FeatureSectionRightArgs,
  FeatureSectionGridArgs,
  FeatureSectionLeftArgs,
  FaqArgs,
  ContactArgs,
  FooterArgs,
  TestimonialArgs,
} from "../index";

export const FeaturesPageArgs: FeaturesPageProps = {
  nav: { ...NavigationArgs },
  hero: { ...HeroSimpleArgs },
  featureGrid: { ...FeatureSectionGridArgs },
  featureRight: { ...FeatureSectionRightArgs },
  faq: { ...FaqArgs },
  featureLeft: { ...FeatureSectionLeftArgs },
  testimonials: { ...TestimonialArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
