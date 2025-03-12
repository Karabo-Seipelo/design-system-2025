import { memo } from "react";
import Page from "$/Page";
import ContactSection from "$/Section/Contact";
import Faq from "$/Section/Faq";
import Footer from "$/Section/Footer";
import Navbar from "$/NavBar";
import Section from "$/atoms/Section";
import useContent from "@/lib/useContent";

const Contact = () => {
  const { navigation, contact } = useContent();
  const { contact: contactContent, faq, footer } = contact || {};

  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <Section classes="flex flex-col bg-white">
        {contactContent && <ContactSection {...contactContent} />}
        {faq && <Faq {...faq} />}
        {footer && <Footer {...footer} classes="py-[16px] px-[16px]" />}
      </Section>
    </Page>
  );
};

export default memo(Contact);
