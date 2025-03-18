"use client";
import { memo } from "react";
import Page from "$/template/page";
import Faq from "$/organism/faq";
import Footer from "$/organism/footer";
import Navbar from "$/organism/navBar";
import Section from "$/atoms/Section";
import ContactSection from "$/organism/contact";
import useContent from "#/hooks/useContent";

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
