import { memo } from "react";
import Page from "$/organisms/Page";
import Navbar from "$/organisms/NavBar";
import Price from "$/organisms/PricingTable/Tier";
import Section from "$/atoms/section";
import FeatureSection from "$/organisms/Features";
import Testimonials from "$/organisms/Testimonials";
import Faq from "$/organisms/Faq";
import Footer from "$/organisms/Footer";
import ContactSection from "$/organisms/Contact";
import useContent from "@/lib/useContent";

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
