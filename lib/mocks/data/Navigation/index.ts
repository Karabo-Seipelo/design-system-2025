import { NavProps } from "$/organisms/Nav/interface";

const SubMenu = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

const Nav = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

const NavDropDown = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#", items: SubMenu },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
];

const EcommerceNav = [
  { name: "Shop all", href: "/shop" },
  { name: "Latest arrivals", href: "/latest-arrivals" },
];

const CallToAction = [
  { name: "Learn more", mobileName: "Learn more", href: "#", primary: false },
  { name: "See pricing", mobileName: "Try it out", href: "#", primary: true },
];

const Brand = {
  name: "Abstractly",
  imageUrl: "/abstractly.svg",
  href: "#",
};

export const NavigationWithDropDownArgs: NavProps = {
  navItems: NavDropDown,
  brand: Brand,
  callToAction: CallToAction,
};

export const NavigationArgs: NavProps = {
  navItems: Nav,
  brand: Brand,
  callToAction: CallToAction,
};

export const EcommerceNavArgs: NavProps = {
  navItems: EcommerceNav,
  brand: Brand,
  cart: true,
};
