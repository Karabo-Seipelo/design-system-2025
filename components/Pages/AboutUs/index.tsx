import { AboutUsPageProps } from "../index";
import NavBar from "$/organisms/NavBar";
import Footer from "$/organisms/Footer";
import HeroSection from "$/organisms/Hero";
import StatisticsSection from "$/organisms/Statistics";
import TeamSection from "$/organisms/Team";
import Section from "$/atoms/section";
import ContactSection from "$/organisms/Contact";
import Page from "$/organisms/Page";

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
