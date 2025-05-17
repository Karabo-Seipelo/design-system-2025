export type Article = {
  title: string;
  description: string;
};

export type ContactDetails = {
  title: string;
  content: string;
  button: {
    label: string;
  };
};

export interface HeaderFAQProps {
  title?: string;
  subTitle?: string;
}

export interface FaqItemProps {
  title: string;
  description: string;
  showDivider: boolean;
}

export interface FaqConatcProps {
  constactDetails: ContactDetails;
}

export type FAQProps = {
  title: string;
  subTitle: string;
  articles: Article[];
  contactDetails: ContactDetails;
};
