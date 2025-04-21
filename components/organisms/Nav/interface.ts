import { CallToAction } from "./CallToAction";

export interface SubMenu {
  name: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href?: string;
  items?: SubMenu[];
}

export interface Brand {
  name: string;
  imageUrl: string;
  href?: string;
}

export interface NavProps {
  navItems: NavItem[];
  brand: Brand;
  cart?: boolean;
  callToAction?: CallToAction[];
  classes?: string;
}
