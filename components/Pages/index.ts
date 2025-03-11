import { NavItem, Brand } from "$/NavBar/index";
import { CallToAction } from "$/NavBar/CallToAction";
import { HeroSectionProps } from "$/Section/Hero";
import { FeatureSectionProps } from "$/Section/Features/index";
import { FAQProps } from "$/Section/Faq";
import { FooterProps } from "$/Section/Footer";
import { ContactSectionProps } from "$/Section/Contact/interfaces";
import { TestimonialsProps } from "$/Section/Testimonials";
import { NewsletterSectionProps } from "$/Section/Newsletter";
import { LogoMarqueeProps } from "$/LogoMarquee/index";
import { PricingProps } from "$/Section/PricingTable/Tier";
import { StatisticsSectionProps } from "$/Section/Statistics";

export interface Navigation {
  navItems: NavItem[];
  brand: Brand;
  callToAction?: CallToAction[];
}

export interface Page {
  nav: Navigation;
  hero: HeroSectionProps;
  featureGrid: FeatureSectionProps;
  featureRight: FeatureSectionProps;
  featureLeft: FeatureSectionProps;
  faq: FAQProps;
  contact: ContactSectionProps;
  footer: FooterProps;
}

export interface FeaturesPageProps extends Page {
  testimonials: TestimonialsProps;
}

export interface MarketingLandingPageProps extends Page {
  logoMarquee: LogoMarqueeProps;
  pricing: PricingProps;
  newsLetter: NewsletterSectionProps;
}

export interface PricingPageProps  {
  nav: Navigation;
  pricing: PricingProps;
  faq: FAQProps;
  featureGrid: FeatureSectionProps;
  testimonials: TestimonialsProps;
  contact: ContactSectionProps;
  footer: FooterProps;
}

export interface AboutUsPageProps extends Page {
  nav: Navigation;
  hero: HeroSectionProps;
  statistics: StatisticsSectionProps;
  team: any;
  contact: ContactSectionProps;
  footer: FooterProps;
}
