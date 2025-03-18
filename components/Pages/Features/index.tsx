import React from "react";
import { FeaturesPageProps } from "../";
import Section from "$/atoms/Section";
import NavBar from "$/organism/navBar";
import HeroSection from "$/organism/hero";
import FeatureSection from "$/organism/features";
import Testimonials from "$/organism/testimonials";
import Faq from "$/organism/faq";
import Footer from "$/organism/footer";
import ContactSection from "$/organism/contact";
import Page from "$/template/page";

const FeaturesPage: React.FC<FeaturesPageProps> = ({
  nav,
  hero,
  featureGrid,
  featureRight,
  featureLeft,
  testimonials,
  faq,
  contact,
  footer,
}) => {
  return (
    <Page>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <HeroSection {...hero} />
        <FeatureSection {...featureGrid} />
        <FeatureSection {...featureRight} />
        <FeatureSection {...featureLeft} />
        <Testimonials {...testimonials} />
        <Faq {...faq} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </Page>
  );
};

export default FeaturesPage;
