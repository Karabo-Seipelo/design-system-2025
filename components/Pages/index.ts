import { NavItem, Brand, NavProps } from "$/organisms/Nav/interface";
import { CallToAction } from "$/organisms/Nav/CallToAction";
import { HeroSectionProps } from "$/organisms/Hero";
import { FeatureSectionProps } from "$/organisms/Features/index";
import { FAQProps } from "$/organisms/Faq";
import { FooterProps } from "$/organisms/Footer";
import { ContactSectionProps } from "$/organisms/Contact/interfaces";
import { TestimonialsProps } from "$/organisms/Testimonials";
import { NewsletterSectionProps } from "$/organisms/Newsletter";
import { LogoMarqueeProps } from "$/molecules/LogoMarquee";
import { PricingProps } from "$/organisms/PricingTable/Tier";
import { StatisticsSectionProps } from "$/organisms/Statistics";
import { TeamSectionProps } from "$/organisms/Team";
import { ProductDetailsProps } from "$/organisms/ProductDetails/index";
import { ProductSpecificationsProps } from "$/organisms/ProductSpecifications/interface";
import { ProductGridProps } from "$/organisms/ProductGrid/interfaces";
import { FooterMultiColumnProps } from "$/organisms/FooterMultiColumn/interfaces";

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

export interface ProductDetailsPageProps {
  nav: NavProps;
  productDetails: ProductDetailsProps;
  productSpecification: ProductSpecificationsProps;
  collection: ProductGridProps;
  footer: FooterMultiColumnProps;
}
