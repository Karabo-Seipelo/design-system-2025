import React from "react";
import { FeaturesPageProps } from "../index";
import Section from "$/atoms/Section";
import NavBar from "$/organisms/NavBar";
import HeroSection from "$/organisms/Hero";
import FeatureSection from "$/organisms/Features";
import Testimonials from "$/organisms/Testimonials";
import Faq from "$/organisms/Faq";
import Footer from "$/organisms/Footer";
import ContactSection from "$/organisms/Contact";
import Page from "$/organisms/Page";

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
