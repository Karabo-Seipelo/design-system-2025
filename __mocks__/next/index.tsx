import React from "react";

const NextImage = ({
  alt = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={alt} />;
};

export default NextImage;
