import { memo } from "react";
import Page from "$/organisms/Page";
import Navbar from "$/organisms/NavBar";
import Footer from "$/organisms/Footer";
import HeroSection from "$/organisms/Hero";
import StatisticsSection from "$/organisms/Statistics";
import TeamSection from "$/organisms/Team";
import Section from "$/atoms/Section";
import ContactSection from "$/organisms/Contact";
import useContent from "@/lib/useContent";

const About = () => {
  const { navigation, about } = useContent();
  const { hero, statistics, team, contact, footer } = about || {};

  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        {hero && <HeroSection {...hero} />}
        {statistics && <StatisticsSection {...statistics} />}
        {team && <TeamSection {...team} />}
        {contact && <ContactSection {...contact} />}
        {footer && <Footer {...footer} classes="py-[16px] px-[16px]" />}
      </Section>
    </Page>
  );
};

export default memo(About);
