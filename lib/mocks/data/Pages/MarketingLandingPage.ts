import { MarketingLandingPageProps } from "../../../../components/pages";
import {
  NavigationArgs,
  HeroSimpleArgs,
  LogoMarqueeArgs,
  FeatureSectionRightArgs,
  FeatureSectionLeftArgs,
  FeatureSectionGridArgs,
  TierPricingArgs,
  FaqArgs,
  NewsletterDefault,
  ContactArgs,
  FooterArgs,
} from "../index";

export const MarketingLandingPageArgs: MarketingLandingPageProps = {
  nav: { ...NavigationArgs },
  hero: { ...HeroSimpleArgs },
  logoMarquee: { ...LogoMarqueeArgs },
  featureGrid: { ...FeatureSectionGridArgs },
  featureRight: { ...FeatureSectionRightArgs },
  featureLeft: { ...FeatureSectionLeftArgs },
  pricing: { ...TierPricingArgs },
  faq: { ...FaqArgs },
  newsLetter: { ...NewsletterDefault },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
