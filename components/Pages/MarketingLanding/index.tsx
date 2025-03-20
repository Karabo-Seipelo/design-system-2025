import Section from "$/atoms/section";
import NavBar from "$/organisms/NavBar";
import HeroSection from "$/organisms/Hero";
import LogoMarquee from "$/molecules/LogoMarquee";
import FeatureSection from "$/organisms/Features";
import Price from "$/organisms/PricingTable/Tier";
import NewsletterSection from "$/organisms/Newsletter";
import Footer from "$/organisms/Footer";
import ContactSection from "$/organisms/Contact";
import Faq from "$/organisms/Faq";
import { MarketingLandingPageProps } from "../index";
import Page from "$/organisms/Page";

const MarketingLandingPage: React.FC<MarketingLandingPageProps> = ({
  nav,
  hero,
  logoMarquee,
  featureGrid,
  featureRight,
  featureLeft,
  pricing,
  faq,
  newsLetter,
  contact,
  footer,
}) => {
  return (
    <Page>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <HeroSection {...hero} />
        <LogoMarquee {...logoMarquee} />
        <FeatureSection {...featureGrid} />
        <FeatureSection {...featureRight} />
        <FeatureSection {...featureLeft} />
        <Price {...pricing} />
        <Faq {...faq} />
        <NewsletterSection {...newsLetter} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </Page>
  );
};

export default MarketingLandingPage;
