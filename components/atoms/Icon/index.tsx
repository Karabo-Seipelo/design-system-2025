import { useMemo } from "react";
import "remixicon/fonts/remixicon.css";

export type IconType =
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
  icon: string;
  size?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ICON_MAP: Record<IconType, string> = {
  rainbow: "rainbow-line",
  shirt: "shirt-line",
  plant: "plant-line",
  shapes: "shapes-line",
  "price-tag-2": "price-tag-2-line",
  "shield-star": "shield-star-line",
  scales: "scales-2-line",
  stack: "stack-line",
  "color-filter": "color-filter-line",
  "hand-heart": "hand-heart-line",
  windy: "windy-line",
  "t-shirt": "t-shirt-line",
  recycle: "recycle-line",
  paint: "paint-line",
  water: "water-flash-line",
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
    return "question-line";
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

const Icon = ({
  icon,
  size = "medium",
  color = "neutral",
  className,
  style,
}: IconProps) => {
  const iconClass = useMemo(
    () => `ri-${iconName(icon)} ${iconColor(color)} ${iconSize(size)}`,
    [icon, color, size],
  );

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center bg-white rounded-full p-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)] ${className}`}
      style={style}
    >
      <i className={iconClass}></i>
    </div>
  );
};

export default Icon;
