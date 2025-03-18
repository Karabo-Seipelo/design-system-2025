"use client";
import { memo } from "react";
import Page from "$/template/page";
import Navbar from "$/organism/navBar";
import Price from "$/organism/pricingTable/tier";
import Section from "$/atoms/section";
import FeatureSection from "$/organism/features";
import Testimonials from "$/organism/testimonials";
import Faq from "$/organism/faq";
import Footer from "$/organism/footer";
import ContactSection from "$/organism/contact";
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
