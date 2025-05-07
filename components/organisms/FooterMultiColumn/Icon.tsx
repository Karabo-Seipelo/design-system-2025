import "remixicon/fonts/remixicon.css";
import { IconProps } from "./interfaces";

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

const Icon: React.FC<IconProps> = ({
  name,
  color = "neutral",
  size = "medium",
}) => {
  const iconClass = ICON_MAP[name] || "ri-question-line";
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.medium;
  const colorClass = COLOR_MAP[color] || COLOR_MAP.neutral;

  return (
    <i
      className={`${iconClass} ${sizeClass} ${colorClass}`}
      aria-label={`social media ${name}`}
    />
  );
};

export default Icon;
