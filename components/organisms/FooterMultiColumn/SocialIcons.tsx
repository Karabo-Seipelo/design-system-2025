import { Fragment } from "react";
import { SocialIconsProps } from "./interfaces";
import Icon from "./Icon";

const SocialIcons: React.FC<SocialIconsProps> = ({ socialLinks }) => {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ name, url }, index) => (
        <Fragment key={`${name}-${index}-${url}`}>
          <a href={url}>
            <Icon name={name} size="large" color="neutral" />
          </a>
        </Fragment>
      ))}
    </div>
  );
};

export default SocialIcons;
