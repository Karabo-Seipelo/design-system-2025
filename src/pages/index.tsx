import Page from "$/Page";
import content from "#/content.json";
import Navbar from "$/NavBar";
import Section from "$/atoms/Section";
import HeroSection from "$/Section/Hero";
import LogoMarquee from "$/LogoMarquee/index";
import FeatureSection from "$/Section/Features";
import Pricing from "$/Section/PricingTable/Tier";
import Faq from "$/Section/Faq";
import NewsletterSection from "$/Section/Newsletter";
import ContactSection from "$/Section/Contact";
import Footer from "$/Section/Footer";

export default function Home() {
  const {
    navigation,
    pages: { home },
  } = content;

  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        <HeroSection {...home.hero} />
        <LogoMarquee {...home.logoMarquee} />
        <FeatureSection {...home.featureGrid} />
        <FeatureSection {...home.featureRight} />
        <FeatureSection {...home.featureLeft} />
        <Pricing {...home.pricing} />
        <Faq {...home.faq} />
        <NewsletterSection {...home.newsletter} />
        <ContactSection {...home.contact} />
        <Footer {...home.footer} />
      </Section>
    </Page>
  );
}
