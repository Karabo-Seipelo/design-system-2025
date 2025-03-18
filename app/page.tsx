"use client";
import { memo } from "react";
import Page from "$/template/page";
import NavBar from "$/organism/navBar";
import Section from "$/atoms/Section";
import HeroSection from "$/organism/hero";
import LogoMarquee from "$/organism/logoMarquee/index";
import FeatureSection from "$/organism/features";
import Pricing from "$/organism/pricingTable/tier";
import Faq from "$/organism/faq";
import NewsletterSection from "$/organism/newsletter";
import ContactSection from "$/organism/contact";
import Footer from "$/organism/footer";
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
