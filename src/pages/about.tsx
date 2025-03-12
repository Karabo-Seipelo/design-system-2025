import { memo } from "react";
import Page from "$/Page";
import NavBar from "$/NavBar";
import Footer from "$/Section/Footer";
import HeroSection from "$/Section/Hero";
import StatisticsSection from "$/Section/Statistics";
import TeamSection from "$/Section/Team";
import Section from "$/atoms/Section";
import ContactSection from "$/Section/Contact";
import useContent from "@/lib/useContent";

const About = () => {
  const { navigation, about } = useContent();
  const { hero, statistics, team, contact, footer } = about || {};

  return (
    <Page>
      {navigation && <NavBar {...navigation} />}
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
