import { AboutUsPageProps } from "../index";
import NavBar from "$/NavBar";
import Footer from "$/Section/Footer";
import HeroSection from "$/Section/Hero";
import StatisticsSection from "$/Section/Statistics";
import TeamSection from "$/Section/Team";
import Section from "$/atoms/Section";
import ContactSection from "$/Section/Contact";
import Page from "$/Page";

const AboutUs: React.FC<AboutUsPageProps> = ({
  nav,
  hero,
  statistics,
  team,
  footer,
  contact,
}) => {
  return (
    <Page>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <HeroSection {...hero} />
        <StatisticsSection {...statistics} />
        <TeamSection {...team} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </Page>
  );
};

export default AboutUs;
