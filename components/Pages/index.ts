import { NavItem, Brand } from "$/organism/navBar";
import { CallToAction } from "$/organism/navBar/CallToAction";
import { HeroSectionProps } from "$/organism/hero";
import { FeatureSectionProps } from "$/organism/features/index";
import { FAQProps } from "$/organism/faq";
import { FooterProps } from "$/organism/footer";
import { ContactSectionProps } from "$/organism/contact/interfaces";
import { TestimonialsProps } from "$/organism/testimonials";
import { NewsletterSectionProps } from "$/organism/newsletter";
import { LogoMarqueeProps } from "$/organism/logoMarquee/index";
import { PricingProps } from "$/organism/pricingTable/tier";
import { StatisticsSectionProps } from "$/organism/statistics";
import { TeamSectionProps } from "$/organism/team";

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
