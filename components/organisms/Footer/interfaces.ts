export type Links = {
  label: string;
  href: string;
  type: "link";
};

export type Socials = {
  label: string;
  href: string;
  icon: string;
  type: "social";
};

export type FooterNavItem = Links | Socials;

export interface FooterNavListProps {
  items: FooterNavItem[];
  type: "link" | "social";
}

export type FooterCopyrightProps = {
  copyright: string;
};

export type FooterLinksProps = {
  links: Links[];
};

export type FooterSocialsProps = {
  socials: Socials[];
};

export type FooterProps = {
  links: Links[];
  socials: Socials[];
  copyright: string;
  className?: string;
};
