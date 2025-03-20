import { ContactUsPageProps } from "..";
import NavBar from "$/organisms/NavBar";
import Footer from "$/organisms/Footer";
import ContactSection from "$/organisms/Contact";
import Section from "$/atoms/Section";
import Faq from "$/organisms/Faq";
import Page from "$/organisms/Page";

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
