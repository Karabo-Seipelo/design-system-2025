import { NavBarProps } from "../../../../components/NavBar/index";

const Nav = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contact", href: "#" },
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

export const NavigationArgs: NavBarProps = {
  navItems: Nav,
  brand: Brand,
  callToAction: CallToAction,
};
