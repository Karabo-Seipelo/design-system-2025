import { ContactUsPageProps } from "..";
import NavBar from "$/organism/navBar";
import Footer from "$/organism/footer";
import ContactSection from "$/organism/contact";
import Section from "$/atoms/Section";
import Faq from "$/organism/faq";
import Page from "$/template/page";

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
