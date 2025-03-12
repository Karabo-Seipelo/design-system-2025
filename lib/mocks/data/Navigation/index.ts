import { NavBarProps } from "../../../../components/NavBar/index";

const Nav = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
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
