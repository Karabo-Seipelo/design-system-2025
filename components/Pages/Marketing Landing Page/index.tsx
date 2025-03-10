import Section from "../../atoms/Section";
import NavBar from "../../NavBar/index";
import HeroSection from "../../Section/Hero";
import LogoMarquee from "../../LogoMarquee/index";
import FeatureSection from "../../Section/Features/index";
import Price from "../../Section/PricingTable/Tier";
import NewsletterSection from "../../Section/Newsletter";
import Footer from "../../Section/Footer";
import ContactSection from "../../Section/Contact/index";
import Faq from "$/Section/Faq";
import { MarketingLandingPageProps } from "../index";

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
        <Faq {...faq} />
        <NewsletterSection {...newsLetter} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </div>
  );
};

export default MarketingLandingPage;
