import { PricingPageProps } from "$/pages";
import { NavigationArgs } from "../Navigation";
import { TierPricingArgs as PricingArgs } from "../Section/PricingTable";
import { FeatureSectionGridArgs } from "../Section/Feature";
import { FaqArgs } from "../Section/FaqArgs";
import { ContactArgs } from "../Section/Contact";
import { FooterArgs } from "../Section/Footer";
import { TestimonialArgs } from "../Section/Testimonials";

export const PricingPageArgs: PricingPageProps = {
  nav: { ...NavigationArgs },
  pricing: { ...PricingArgs },
  faq: { ...FaqArgs },
  featureGrid: { ...FeatureSectionGridArgs },
  testimonials: { ...TestimonialArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
