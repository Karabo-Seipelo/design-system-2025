import { Fragment } from "react";
import { SocialIconsProps } from "./interfaces";
import Icon from "./Icon";
import { uniqueId } from "lodash";

const SocialIcons: React.FC<SocialIconsProps> = ({ socialLinks }) => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <Fragment key={uniqueId("social-")}>
          <a key={link.name} href={link.url}>
            <Icon name={link.name} size="large" color="neutral" />
          </a>
        </Fragment>
      ))}
    </div>
  );
};

export default SocialIcons;
