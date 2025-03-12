"use client"
import { memo } from "react";
import Page from "$/Page";
import Navbar from "$/NavBar";
import Price from "$/Section/PricingTable/Tier";
import Section from "$/atoms/Section";
import FeatureSection from "$/Section/Features";
import Testimonials from "$/Section/Testimonials";
import Faq from "$/Section/Faq";
import Footer from "$/Section/Footer";
import ContactSection from "$/Section/Contact";
import useContent from "#/hooks/useContent";

const Pricing = () => {
  const { navigation, pricing } = useContent();
  const { price, faq, testimonials, featureGrid, contact, footer } =
    pricing || {};
  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        {price && <Price {...price} />}
        {faq && <Faq {...faq} />}
        {featureGrid && <FeatureSection {...featureGrid} />}
        {testimonials && <Testimonials {...testimonials} />}
        {contact && <ContactSection {...contact} />}
        {footer && <Footer {...footer} classes="py-[16px] px-[16px]" />}
      </Section>
    </Page>
  );
};

export default memo(Pricing);
