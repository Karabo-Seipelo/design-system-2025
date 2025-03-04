import Link from "next/link";
import "remixicon/fonts/remixicon.css";

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
  youtube: "ri-youtube-line",
  instagram: "ri-instagram-line",
  facebook: "ri-facebook-box-line",
  github: "ri-github-line",
  twitter: "ri-twitter-x-line",
};

const Footer: React.FC<FooterProps> = ({ links, socails, copyright }) => {
  return (
    <div className="rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg w-screen h-screen">
      <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
        <section className="flex flex-col gap-12 md:gap-16 py-[286px]">
          <div className="flex justify-center">
            <footer className="flex flex-col justify-center items-center gap-8 lg:w-[768px]">
              <ul className="flex justify-center items-center gap-4 md:gap-6">
                {links.map((link, index) => (
                  <li key={`link-${index}`}>
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
                      <Link
                        href={social.href}
                        aria-label={`${social.label} profile`}
                      >
                        <i
                          className={`${socialsIcons[social.icon]} text-neutral-400 size-6`}
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
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
