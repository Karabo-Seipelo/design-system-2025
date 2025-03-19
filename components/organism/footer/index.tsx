import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import GitHub from "&/github-line.svg";
import Twitter from "&/twitter-x-line.svg";
import Instagram from "&/instagram-line.svg";
import Facebook from "&/facebook-box-line.svg";
import Youtube from "&/youtube-line.svg";
import { v4 as uuidv4 } from "uuid";

type Links = {
  label: string;
  href: string;
};

type socials = {
  label: string;
  href: string;
  icon: string;
};

export type FooterProps = {
  links: Links[];
  socials: socials[];
  copyright: string;
  classes?: string;
};

const generateSocials = (social: string, size: number) => {
  switch (social) {
    case "youtube":
      return (
        <Youtube width={size} height={size} className="fill-neutral-400" />
      );
    case "instagram":
      return (
        <Instagram width={size} height={size} className="fill-neutral-400" />
      );
    case "facebook":
      return (
        <Facebook width={size} height={size} className="fill-neutral-400" />
      );
    case "github":
      return <GitHub width={size} height={size} className="fill-neutral-400" />;
    case "twitter":
      return (
        <Twitter width={size} height={size} className="fill-neutral-400" />
      );
    default:
      return null;
  }
};

const Footer: React.FC<FooterProps> = ({
  links,
  socials,
  copyright,
  classes,
}) => {
  return (
    <footer
      className={`flex flex-col items-center justify-center gap-4  text-sm ${classes}`}
    >
      <ul className="flex justify-center items-center gap-4 md:gap-6">
        {links.map((link) => (
          <li key={uuidv4()}>
            <Link
              className="font-medium text-sm text-neutral-600"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center gap-4">
        <ul className="flex justify-center items-center gap-6">
          {socials.map((social, index) => (
            <li key={`social-${index}-${social.icon}`}>
              <Link href={social.href} aria-label={`${social.label} profile`}>
                {generateSocials(social.icon, 16)}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="font-normal text-sm text-center text-normal-900"
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
      </div>
    </footer>
  );
};

export default Footer;
