import { FooterProps } from "./interfaces";
import FooterCopyright from "./FooterCopyright";
import FooterNavList from "./FooterNavList";
import classNames from "classnames";

const Footer: React.FC<FooterProps> = ({
  links,
  socials,
  copyright,
  className = "",
  ...args
}) => {
  const footerClasses = classNames(
    "flex flex-col items-center justify-center gap-4  text-sm",
    className,
  );

  return (
    <footer className={footerClasses} {...args}>
      <FooterNavList items={links} type="link" />
      <div className="flex flex-col justify-center items-center gap-4">
        <FooterNavList items={socials} type="social" />
        <FooterCopyright copyright={copyright} />
      </div>
    </footer>
  );
};

export default Footer;
