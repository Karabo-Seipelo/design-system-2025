import Section from "$/atoms/Section";
import NavBar from "$/NavBar";
import HeroSection from "$/Section/Hero";
import LogoMarquee from "$/LogoMarquee/index";
import FeatureSection from "$/Section/Features";
import Price from "$/Section/PricingTable/Tier";
import NewsletterSection from "$/Section/Newsletter";
import Footer from "$/Section/Footer";
import ContactSection from "$/Section/Contact";
import Faq from "$/Section/Faq";
import { MarketingLandingPageProps } from "../index";
import Page from "$/Page";

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
