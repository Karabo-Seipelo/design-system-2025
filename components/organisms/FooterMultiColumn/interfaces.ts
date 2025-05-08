import { SubscribeNewsletterProps } from "$/molecules/Form/SubscribeNewsletter";

export interface Link {
  text: string;
  url: string;
}

export interface Logo {
  image_url: string | undefined;
  alt: string | undefined;
}

export interface ColumnLogoAndDescriptionProps {
  logo: Logo;
  description?: string;
}

export interface ColumnTitleAndLinksProps {
  title: string;
  items: Link[];
}

export interface ColumnTitleAndLinks extends ColumnTitleAndLinksProps {
  id: string | number;
}

export interface ColumnLogoAndDescription
  extends ColumnLogoAndDescriptionProps {
  id: string | number;
}

export type Column = ColumnLogoAndDescription | ColumnTitleAndLinks;

export interface FooterMultiColumnProps {
  form: SubscribeNewsletterProps;
  columns: Column[];
  socialAndTerms: FooterContactProps;
}

export interface FooterColumnsProps {
  columns: Column[];
}

export type IconSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

export interface IconProps {
  name: string;
  size: IconSize;
  color: string;
}

export interface SocialLink {
  name: string;
  size: string;
  color: string;
  url: string;
}

export interface FooterContactProps {
  description: string;
  socialLinks: SocialLink[];
}

export interface SocialIconsProps {
  socialLinks: SocialLink[];
}
