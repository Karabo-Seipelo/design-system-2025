import Section from "$/atoms/Section";
import NavBar from "$/organisms/NavBar";
import FeatureSection from "$/organisms/Features";
import Price from "$/organisms/PricingTable/Tier";
import Testimonials from "$/organisms/Testimonials";
import Footer from "$/organisms/Footer";
import ContactSection from "$/organisms/Contact";
import Faq from "$/organisms/Faq";
import { PricingPageProps } from "../index";
import Page from "$/organisms/Page";

const PricingPage: React.FC<PricingPageProps> = ({
  nav,
  pricing,
  faq,
  featureGrid,
  testimonials,
  contact,
  footer,
}) => {
  return (
    <Page>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <Price {...pricing} />
        <Faq {...faq} />
        <FeatureSection {...featureGrid} />
        <Testimonials {...testimonials} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </Page>
  );
};

export default PricingPage;
