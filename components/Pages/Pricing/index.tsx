import Section from "$/atoms/Section";
import NavBar from "$/organism/navBar";
import FeatureSection from "$/organism/features";
import Price from "$/organism/pricingTable/tier";
import Testimonials from "$/organism/testimonials";
import Footer from "$/organism/footer";
import ContactSection from "$/organism/contact";
import Faq from "$/organism/faq";
import { PricingPageProps } from "../";
import Page from "$/template/page";

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
