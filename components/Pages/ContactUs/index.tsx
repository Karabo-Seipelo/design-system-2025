import { ContactUsPageProps } from "..";
import NavBar from "$/NavBar";
import Footer from "$/Section/Footer";
import useContent from "#/hooks/useContent";
import Section from "$/atoms/Section";
import Faq from "$/Section/Faq";
import Page from "$/Page";

const ContactUs: React.FC<ContactUsPageProps> = ({
  nav,
  contact,
  footer,
  faq,
}) => {
  return (
    <Page>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <ContactSection {...contact} />
        <Faq {...faq} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </Page>
  );
};

export default ContactUs;
