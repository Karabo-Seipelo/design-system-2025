import { NavItem, Brand } from "$/NavBar/index";
import { CallToAction } from "$/NavBar/CallToAction";
import { HeroSectionProps } from "$/organisms/Hero";
import { FeatureSectionProps } from "$/organisms/Features/index";
import { FAQProps } from "$/organisms/Faq";
import { FooterProps } from "$/organisms/Footer";
import { ContactSectionProps } from "$/organisms/Contact/interfaces";
import { TestimonialsProps } from "$/organisms/Testimonials";
import { NewsletterSectionProps } from "$/Section/Newsletter";
import { LogoMarqueeProps } from "$/LogoMarquee/index";
import { PricingProps } from "$/organisms/PricingTable/Tier";
import { StatisticsSectionProps } from "$/organisms/Statistics";
import { TeamSectionProps } from "$/organisms/Team";

export interface Navigation {
  navItems: NavItem[];
  brand: Brand;
  callToAction?: CallToAction[];
}

export interface BasePageProps {
  nav: Navigation;
  footer: FooterProps;
  contact?: ContactSectionProps;
  faq?: FAQProps;
}

export interface FeaturesPageProps extends BasePageProps {
  hero: HeroSectionProps;
  featureGrid: FeatureSectionProps;
  featureRight: FeatureSectionProps;
  featureLeft: FeatureSectionProps;
  testimonials: TestimonialsProps;
  contact: ContactSectionProps;
  faq: FAQProps;
}

export interface MarketingLandingPageProps extends BasePageProps {
  hero: HeroSectionProps;
  featureGrid: FeatureSectionProps;
  featureRight: FeatureSectionProps;
  featureLeft: FeatureSectionProps;
  logoMarquee: LogoMarqueeProps;
  pricing: PricingProps;
  newsLetter: NewsletterSectionProps;
  faq: FAQProps;
  contact: ContactSectionProps;
}

export interface PricingPageProps extends BasePageProps {
  pricing: PricingProps;
  featureGrid: FeatureSectionProps;
  testimonials: TestimonialsProps;
  contact: ContactSectionProps;
  faq: FAQProps;
}

export interface AboutUsPageProps extends BasePageProps {
  hero: HeroSectionProps;
  statistics: StatisticsSectionProps;
  team: TeamSectionProps;
  contact: ContactSectionProps;
}

export interface ContactUsPageProps extends BasePageProps {
  contact: ContactSectionProps;
  faq: FAQProps;
}
