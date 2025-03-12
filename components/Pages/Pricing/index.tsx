import Section from "$/atoms/Section";
import NavBar from "$/NavBar";
import FeatureSection from "$/Section/Features";
import Price from "$/Section/PricingTable/Tier";
import Testimonials from "$/Section/Testimonials";
import Footer from "$/Section/Footer";
import useContent from "#/hooks/useContent";
import Faq from "$/Section/Faq";
import { PricingPageProps } from "../index";
import Page from "$/Page";

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
