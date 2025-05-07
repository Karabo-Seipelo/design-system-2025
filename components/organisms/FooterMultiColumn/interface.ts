import { SubscribeNewsletterProps } from "$/molecules/Form/SubscribeNewsletter";

export interface Link {
  text: string;
  link: string;
}

export interface ColumnLogoAndDescriptionProps {
  logo: {
    image_url: string | undefined;
    alt: string | undefined;
  };
  description?: string;
}

export interface ColumnTitleAndLinksProps {
  title: string;
  items: Link[];
}

export type Column = ColumnLogoAndDescriptionProps | ColumnTitleAndLinksProps;

export interface FooterMultiColumnProps {
  form: SubscribeNewsletterProps;
  columns: Column[];
}

export interface FooterColumnsProps {
  columns: Column[];
}
