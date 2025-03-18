import { ContactUsPageProps } from "$/pages";
import { NavigationArgs, FooterArgs, ContactArgs, FaqArgs } from "../index";

export const ContactUsPageArgs: ContactUsPageProps = {
  nav: { ...NavigationArgs },
  faq: { ...FaqArgs },
  contact: { ...ContactArgs },
  footer: { ...FooterArgs },
};
