import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import GitHub from "../../../public/github-line.svg";
import Twitter from "../../../public/twitter-x-line.svg";
import Instagram from "../../../public/instagram-line.svg";
import Facebook from "../../../public/facebook-box-line.svg";
import Youtube from "../../../public/youtube-line.svg";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type Links = {
  label: string;
  href: string;
};

type Socails = {
  label: string;
  href: string;
  icon: "youtube" | "instagram" | "facebook" | "github" | "twitter";
};

type FooterProps = {
  links: Links[];
  socails: Socails[];
  copyright: string;
};

const socialsIcons = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  github: GitHub,
  twitter: Twitter,
};

const Footer: React.FC<FooterProps> = ({ links, socails, copyright }) => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4  text-sm">
      <div className="flex flex-col gap-10 justify-center">
        <ul className="flex justify-center items-center gap-4 md:gap-6">
          {links.map((link, index) => (
            <li key={uuidv4()}>
              <Link
                className="font-medium text-sm text-gray-400 hover:text-gray-900"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center items-center gap-4">
          <ul className="flex justify-center items-center gap-6">
            {socails.map((social, index) => (
              <li key={`social-${index}-${social.icon}`}>
                <Link href={social.href} aria-label={`${social.label} profile`}>
                  <Image
                    src={socialsIcons[social.icon]}
                    alt={social.label}
                    className="size-6 fill-red-400"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="font-normal text-sm text-center text-normal-900"
            dangerouslySetInnerHTML={{ __html: copyright }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
