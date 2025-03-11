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
import { TeamSectionProps } from "$/Section/Team";

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
}

export interface MarketingLandingPageProps extends BasePageProps {
  hero: HeroSectionProps;
  featureGrid: FeatureSectionProps;
  featureRight: FeatureSectionProps;
  featureLeft: FeatureSectionProps;
  logoMarquee: LogoMarqueeProps;
  pricing: PricingProps;
  newsLetter: NewsletterSectionProps;
}

export interface PricingPageProps extends BasePageProps {
  pricing: PricingProps;
  featureGrid: FeatureSectionProps;
  testimonials: TestimonialsProps;
}

export interface AboutUsPageProps extends BasePageProps {
  hero: HeroSectionProps;
  statistics: StatisticsSectionProps;
  team: TeamSectionProps;
}

export interface ContactPageProps extends BasePageProps {
  contact: ContactSectionProps;
}
