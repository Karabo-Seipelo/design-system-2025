"use client";
import { memo } from "react";
import Page from "$/template/page";
import NavBar from "$/organism/navBar";
import Section from "$/atoms/section";
import HeroSection from "$/organism/hero";
import FeatureSection from "$/organism/features";
import Testimonials from "$/organism/testimonials";
import Faq from "$/organism/faq";
import Footer from "$/organism/footer";
import ContactSection from "$/organism/contact";
import useContent from "#/hooks/useContent";

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
