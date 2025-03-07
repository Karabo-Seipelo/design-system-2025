import Section from "../../atoms/Section";
import NavBar, { NavItem, Brand } from "../../NavBar/index";
import { CallToAction } from "../../NavBar/CallToAction";
import HeroSection, { HeroSectionProps } from "../../Section/Hero";
import LogoMarquee, { LogoMarqueeProps } from "../../LogoMarquee/index";
import FeatureSection, {
  FeatureSectionProps,
} from "../../Section/Features/index";
import Price, { PricingProps } from "../../Section/Pricing/Tier";
import FAQ, { FAQProps } from "../../Section/FAQ";
import NewsletterSection, {
  NewsletterSectionProps,
} from "../../Section/Newsletter";
import Footer, { FooterProps } from "../../Section/Footer";
import { ContactSectionProps } from "../../Section/Contact/interfaces";
import ContactSection from "../../Section/Contact/index";

export interface Navigation {
  navItems: NavItem[];
  brand: Brand;
  callToAction?: CallToAction[];
}

export interface MarketingLandingPageProps {
  nav: Navigation;
  hero: HeroSectionProps;
  logoMarquee: LogoMarqueeProps;
  featureGrid: FeatureSectionProps;
  featureRight: FeatureSectionProps;
  pricing: PricingProps;
  faq: FAQProps;
  newsLetter: NewsletterSectionProps;
  footer: FooterProps;
  contact: ContactSectionProps;
}

const MarketingLandingPage: React.FC<MarketingLandingPageProps> = ({
  nav,
  hero,
  logoMarquee,
  featureGrid,
  featureRight,
  pricing,
  faq,
  newsLetter,
  contact,
  footer,
}) => {
  return (
    <div>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <HeroSection {...hero} />
        <LogoMarquee {...logoMarquee} />
        <FeatureSection {...featureGrid} />
        <FeatureSection {...featureRight} />
        <Price {...pricing} />
        <FAQ {...faq} />
        <NewsletterSection {...newsLetter} />
        <ContactSection {...contact} />
        <Footer {...footer} />
      </Section>
    </div>
  );
};

export default MarketingLandingPage;
