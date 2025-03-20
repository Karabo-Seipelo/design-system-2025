import { memo } from "react";
import Page from "$/organisms/Page";
import Navbar from "$/organisms/NavBar";
import Section from "$/atoms/Section";
import HeroSection from "$/organisms/Hero";
import FeatureSection from "$/organisms/Features";
import Testimonials from "$/organisms/Testimonials";
import Faq from "$/organisms/Faq";
import Footer from "$/organisms/Footer";
import ContactSection from "$/organisms/Contact";
import useContent from "@/lib/useContent";

const Features = () => {
  const { navigation, features } = useContent();
  const {
    hero,
    featureGrid,
    featureLeft,
    featureRight,
    testimonials,
    faq,
    contact,
    footer,
  } = features || {};

  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        {hero && <HeroSection {...hero} />}
        {featureGrid && <FeatureSection {...featureGrid} />}
        {featureGrid && <FeatureSection {...featureRight} />}
        {featureLeft && <FeatureSection {...featureLeft} />}
        {testimonials && <Testimonials {...testimonials} />}
        {faq && <Faq {...faq} />}
        {contact && <ContactSection {...contact} />}
        {footer && <Footer {...footer} classes="py-[16px] px-[16px]" />}
      </Section>
    </Page>
  );
};

export default memo(Features);
