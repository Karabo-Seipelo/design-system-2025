import { SubscribeNewsletterProps } from "$/molecules/Form/SubscribeNewsletter";

export interface Link {
  id: string | number;
  text: string;
  url: string;
}

export interface Logo {
  image_url: string | undefined;
  alt: string | undefined;
}

export interface FooterTrademarkProps {
  logo: Logo;
  description?: string;
  className?: string;
}

export type Column = {
  id: string | number;
  title: string;
  items: Link[];
};

export interface Notification {
  badge: string;
  message: string;
  status: string;
}

export interface Toast {
  success: Notification;
  error: Notification;
}

export interface FormProps extends Omit<SubscribeNewsletterProps, "onSubmit"> {
  formUrl: string;
  toast: Toast;
  onSubmit: (email: string) => Promise<void>;
}

export interface FooterMultiColumnProps {
  form: FormProps;
  trademark: FooterTrademarkProps;
  columns: Column[];
  socialAndTerms: FooterContactProps;
}

export interface FooterColumnsProps {
  className?: string;
  columns: Column[];
}

export type IconSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

export interface IconProps {
  name: string;
  size: IconSize;
  color: string;
}

export interface SocialLink {
  id: string | number;
  name: string;
  size: string;
  color: string;
  url: string;
}

export interface FooterContactProps {
  description: string;
  socialLinks: SocialLink[];
  className?: string;
}

export interface SocialIconsProps {
  socialLinks: SocialLink[];
}
