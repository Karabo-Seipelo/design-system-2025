import { MarketingLandingPageProps } from "../../../../components/Pages";
import {
  NavigationArgs,
  HeroSimpleArgs,
  LogoMarqueeArgs,
  FeatureSectionRightArgs,
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
  pricing: { ...TierPricingArgs },
  faq: { ...FaqArgs },
  newsLetter: { ...NewsletterDefault },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
