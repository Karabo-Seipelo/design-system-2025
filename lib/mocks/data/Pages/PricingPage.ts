import { PricingPageProps } from "$/pages";
import {
  NavigationArgs,
  TierPricingArgs as PricingArgs,
  FeatureSectionGridArgs,
  FaqArgs,
  ContactArgs,
  FooterArgs,
  TestimonialArgs,
} from "../index";

export const PricingPageArgs: PricingPageProps = {
  nav: { ...NavigationArgs },
  pricing: { ...PricingArgs },
  faq: { ...FaqArgs },
  featureGrid: { ...FeatureSectionGridArgs },
  testimonials: { ...TestimonialArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
