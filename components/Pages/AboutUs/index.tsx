import { AboutUsPageProps } from "../";
import NavBar from "$/organism/navBar";
import Footer from "$/organism/footer";
import HeroSection from "$/organism/hero";
import StatisticsSection from "$/organism/statistics";
import TeamSection from "$/organism/team";
import Section from "$/atoms/section";
import ContactSection from "$/organism/contact";
import Page from "$/template/page";

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
