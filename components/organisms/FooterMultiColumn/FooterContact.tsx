import { FooterContactProps } from "./interfaces";
import SocialIcons from "./SocialIcons";

const FooterContact: React.FC<FooterContactProps> = ({
  description,
  socialLinks,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-8 md:flex-row lg:justify-between ${className}`}
    >
      {description && (
        <div
          className="font-normal text-base text-neutral-500"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <SocialIcons socialLinks={socialLinks} />
    </div>
  );
};

export default FooterContact;
