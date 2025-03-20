import { memo } from "react";
import Page from "$/organisms/Page";
import Navbar from "$/organisms/NavBar";
import Section from "$/atoms/section";
import HeroSection from "$/organisms/Hero";
import LogoMarquee from "$/molecules/LogoMarquee";
import FeatureSection from "$/organisms/Features";
import Pricing from "$/organisms/PricingTable/Tier";
import Faq from "$/organisms/Faq";
import NewsletterSection from "$/organisms/Newsletter";
import ContactSection from "$/organisms/Contact";
import Footer from "$/organisms/Footer";
import useContent from "@/lib/useContent";

const Home = () => {
  const { navigation, home } = useContent();
  const {
    hero,
    logoMarquee,
    featureGrid,
    featureLeft,
    featureRight,
    pricing,
    faq,
    newsletter,
    contact,
    footer,
  } = home || {};

  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        {hero && <HeroSection {...hero} />}
        {logoMarquee && <LogoMarquee {...logoMarquee} />}
        {featureGrid && <FeatureSection {...featureGrid} />}
        {featureRight && <FeatureSection {...featureRight} />}
        {featureLeft && <FeatureSection {...featureLeft} />}
        {pricing && <Pricing {...pricing} />}
        {faq && <Faq {...faq} />}
        {newsletter && <NewsletterSection {...newsletter} />}
        {contact && <ContactSection {...contact} />}
        {footer && <Footer {...footer} />}
      </Section>
    </Page>
  );
};
export default memo(Home);
