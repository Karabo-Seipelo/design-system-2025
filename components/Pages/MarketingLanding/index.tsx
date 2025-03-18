import Section from "$/atoms/section";
import NavBar from "$/organism/navBar";
import HeroSection from "$/organism/hero";
import LogoMarquee from "$/organism/logoMarquee/index";
import FeatureSection from "$/organism/features";
import Price from "$/organism/pricingTable/tier";
import NewsletterSection from "$/organism/newsletter";
import Footer from "$/organism/footer";
import ContactSection from "$/organism/contact";
import Faq from "$/organism/faq";
import { MarketingLandingPageProps } from "../";
import Page from "$/template/page";

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
