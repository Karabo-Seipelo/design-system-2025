import Section from "$/atoms/Section";
import NavBar from "$/NavBar/index";
import FeatureSection from "$/Section/Features/index";
import Price from "$/Section/PricingTable/Tier";
import Testimonials from "$/Section/Testimonials";
import Footer from "$/Section/Footer";
import ContactSection from "$/Section/Contact/index";
import Faq from "$/Section/Faq";
import { PricingPageProps } from "../index";

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
    <div>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <Price {...pricing} />
        <Faq {...faq} />
        <FeatureSection {...featureGrid} />
        <Testimonials {...testimonials} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </div>
  );
};

export default PricingPage;
