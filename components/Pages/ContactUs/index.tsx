import { ContactUsPageProps } from "..";
import NavBar from "$/NavBar";
import Footer from "$/Section/Footer";
import ContactSection from "$/Section/Contact";
import Section from "$/atoms/Section";
import Faq from "$/Section/Faq";

const ContactUs: React.FC<ContactUsPageProps> = ({
  nav,
  contact,
  footer,
  faq,
}) => {
  return (
    <div>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <ContactSection {...contact} />
        <Faq {...faq} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </div>
  );
};

export default ContactUs;
