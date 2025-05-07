import "remixicon/fonts/remixicon.css";

type IconSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

const ICON_MAP: Record<string, string> = {
  youtube: "ri-youtube-line",
  facebook: "ri-facebook-box-line",
  twitter: "ri-twitter-x-line",
  instagram: "ri-instagram-line",
  linkedin: "ri-linkedin-line",
  github: "ri-github-line",
};

const SIZE_MAP: Record<string, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
  xxlarge: "text-2xl",
};

const COLOR_MAP: Record<string, string> = {
  primary: "text-indigo-700",
  secondary: "text-secondary-500",
  neutral: "text-neutral-400",
};

interface IconProps {
  name: string;
  size: IconSize;
  color: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = "neutral",
  size = "meduim",
}) => {
  return (
    <i
      className={`${ICON_MAP[name]} ${SIZE_MAP[size]} ${COLOR_MAP[color]}`}
    ></i>
  );
};

export default Icon;
