import { Fragment } from "react";
import { SocialIconsProps } from "./interfaces";
import Icon from "$/atoms/Icon";

const SocialIcons: React.FC<SocialIconsProps> = ({ socialLinks }) => {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ name, url, id }) => (
        <Fragment key={`${name}-${id}-${url}`}>
          <a href={url}>
            <Icon name={name} size="large" color="neutral" />
          </a>
        </Fragment>
      ))}
    </div>
  );
};

export default SocialIcons;
