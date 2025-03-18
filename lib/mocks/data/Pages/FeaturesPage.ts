import { FeaturesPageProps } from "$/pages";
import {
  NavigationArgs,
  HeroBulletsArgs,
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
  hero: { ...HeroBulletsArgs },
  featureGrid: { ...FeatureSectionGridArgs },
  featureRight: { ...FeatureSectionRightArgs },
  featureLeft: { ...FeatureSectionLeftArgs },
  testimonials: { ...TestimonialArgs },
  faq: { ...FaqArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
