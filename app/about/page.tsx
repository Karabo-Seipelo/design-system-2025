"use client";
import { memo } from "react";
import Page from "$/template/page";
import NavBar from "$/organism/navBar";
import Footer from "$/organism/footer";
import HeroSection from "$/organism/hero";
import StatisticsSection from "$/organism/statistics";
import TeamSection from "$/organism/team";
import Section from "$/atoms/Section";
import ContactSection from "$/organism/contact";
import useContent from "#/hooks/useContent";

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
