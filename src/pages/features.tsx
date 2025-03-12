import { memo } from "react";
import Page from "$/Page";
import NavBar from "$/NavBar";
import Section from "$/atoms/Section";
import HeroSection from "$/Section/Hero";
import FeatureSection from "$/Section/Features";
import Testimonials from "$/Section/Testimonials";
import Faq from "$/Section/Faq";
import Footer from "$/Section/Footer";
import ContactSection from "$/Section/Contact";
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
      {navigation && <NavBar {...navigation} />}
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
