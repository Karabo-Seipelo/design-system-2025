import { NavItem, Brand } from "../NavBar/index";
import { CallToAction } from "../NavBar/CallToAction";
import { HeroSectionProps } from "../Section/Hero";
import { FeatureSectionProps } from "../Section/Features/index";
import { FAQProps } from "../Section/Faq";
import { FooterProps } from "../Section/Footer";
import { ContactSectionProps } from "../Section/Contact/interfaces";
import { TestimonialsProps } from "../Section/Testimonials";
import { NewsletterSectionProps } from "../Section/Newsletter";
import { LogoMarqueeProps } from "../LogoMarquee/index";
import { PricingProps } from "../Section/PricingTable/Tier";

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
  //faq: FAQProps;
  contact: ContactSectionProps;
  footer: FooterProps;
}

export interface FeaturesPageProps extends Page {
  featureLeft: FeatureSectionProps;
  testimonials: TestimonialsProps;
  faq: FAQProps;
}

export interface MarketingLandingPageProps extends Page {
  logoMarquee: LogoMarqueeProps;
  pricing: PricingProps;
  newsLetter: NewsletterSectionProps;
}
