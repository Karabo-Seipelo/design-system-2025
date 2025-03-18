import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  classes?: string;
  width?: number;
  height?: number;
  quality?: number;
  ImageComponent?: React.ComponentType<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
}

const Image: React.FC<ImageProps> = ({ src, alt, classes, ImageComponent }) => {
  const ImgComponent = ImageComponent || "img";
  return <ImgComponent src={src} className={classes} alt={alt} />;
};

export default Image;
