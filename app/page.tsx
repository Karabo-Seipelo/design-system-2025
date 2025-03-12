"use client"
import { memo } from "react";
import Page from "$/Page";
import NavBar from "$/NavBar";
import Section from "$/atoms/Section";
import HeroSection from "$/Section/Hero";
import LogoMarquee from "$/LogoMarquee/index";
import FeatureSection from "$/Section/Features";
import Pricing from "$/Section/PricingTable/Tier";
import Faq from "$/Section/Faq";
import NewsletterSection from "$/Section/Newsletter";
import ContactSection from "$/Section/Contact";
import Footer from "$/Section/Footer";
import useContent from "#/hooks/useContent";

const Home = () => {
  const { navigation, home } = useContent();
  const {
    hero,
    logoMarquee,
    featureGrid,
    featureLeft,
    featureRight,
    pricing,
    faq,
    newsletter,
    contact,
    footer,
  } = home || {};

  return (
    <Page>
      {navigation && <NavBar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        {hero && <HeroSection {...hero} />}
        {logoMarquee && <LogoMarquee {...logoMarquee} />}
        {featureGrid && <FeatureSection {...featureGrid} />}
        {featureRight && <FeatureSection {...featureRight} />}
        {featureLeft && <FeatureSection {...featureLeft} />}
        {pricing && <Pricing {...pricing} />}
        {faq && <Faq {...faq} />}
        {newsletter && <NewsletterSection {...newsletter} />}
        {contact && <ContactSection {...contact} />}
        {footer && <Footer {...footer} />}
      </Section>
    </Page>
  );
};
export default memo(Home);
