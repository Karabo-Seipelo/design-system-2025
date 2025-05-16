import { useMemo } from "react";
import "remixicon/fonts/remixicon.css";

export type IconType =
  | "refresh"
  | "team"
  | "refund"
  | "brush"
  | "download"
  | "copyright"
  | "p2p"
  | "rocket"
  | "water-percent"
  | "hd"
  | "youtube"
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin"
  | "github"
  | "rainbow"
  | "shirt"
  | "plant"
  | "shapes"
  | "price-tag-2"
  | "shield-star"
  | "scales"
  | "stack"
  | "color-filter"
  | "hand-heart"
  | "windy"
  | "t-shirt"
  | "recycle"
  | "paint"
  | "water";

export type IconSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

export type IconColor = "primary" | "secondary" | "neutral";

export interface IconProps {
  name: string;
  size?: string;
  color?: string;
}

const ICON_MAP: Record<IconType, string> = {
  refresh: "ri-refresh-line",
  team: "ri-team-line",
  refund: "ri-refund-2-line",
  brush: "ri-brush-line",
  download: "ri-download-2-line",
  copyright: "ri-copyright-line",
  p2p: "ri-p2p-line",
  rocket: "ri-rocket-2-line",
  "water-percent": "ri-water-percent-line",
  hd: "ri-hd-line",
  youtube: "ri-youtube-line",
  facebook: "ri-facebook-box-line",
  twitter: "ri-twitter-x-line",
  instagram: "ri-instagram-line",
  linkedin: "ri-linkedin-line",
  github: "ri-github-line",
  rainbow: "ri-rainbow-line",
  shirt: "ri-shirt-line",
  plant: "ri-plant-line",
  shapes: "ri-shapes-line",
  "price-tag-2": "ri-price-tag-2-line",
  "shield-star": "ri-shield-star-line",
  scales: "ri-scales-2-line",
  stack: "ri-stack-line",
  "color-filter": "ri-color-filter-line",
  "hand-heart": "ri-hand-heart-line",
  windy: "ri-windy-line",
  "t-shirt": "ri-t-shirt-line",
  recycle: "ri-recycle-line",
  paint: "ri-paint-line",
  water: "ri-water-flash-line",
};

const SIZE_MAP: Record<IconSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
  xxlarge: "text-2xl",
};

const COLOR_MAP: Record<IconColor, string> = {
  primary: "text-indigo-700",
  secondary: "text-secondary-500",
  neutral: "text-neutral-900",
};

const isValidIcon = (icon: string): icon is IconType => {
  return icon in ICON_MAP;
};

const isValidSize = (size: string): size is IconSize => {
  return size in SIZE_MAP;
};

const isValidColor = (color: string): color is IconColor => {
  return color in COLOR_MAP;
};

const iconName = (icon: string): string => {
  if (!isValidIcon(icon)) {
    console.warn(`Invalid icon: ${icon}`);
    return "ri-question-line";
  }
  return ICON_MAP[icon];
};

const iconSize = (size: string): string => {
  if (!isValidSize(size)) {
    console.warn(`Invalid size: ${size}`);
    return SIZE_MAP.medium;
  }
  return SIZE_MAP[size];
};
const iconColor = (color: string): string => {
  if (!isValidColor(color)) {
    console.warn(`Invalid color: ${color}`);
    return COLOR_MAP.neutral;
  }
  return COLOR_MAP[color];
};

const Icon = ({ name, size = "medium", color = "neutral" }: IconProps) => {
  const iconClass = useMemo(
    () => `${iconName(name)} ${iconColor(color)} ${iconSize(size)}`,
    [name, color, size],
  );

  return <i className={iconClass} />;
};

export default Icon;
