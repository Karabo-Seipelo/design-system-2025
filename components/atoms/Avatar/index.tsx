import Image from "$/atoms/image";

export interface AvatarProps {
  src: string;
  alt: string;
  classes?: string;
  ImageComponent?: React.ComponentType<
    React.ImgHTMLAttributes<HTMLImageElement>
  >;
}

const Avatar = ({ src, alt, classes, ImageComponent }: AvatarProps) => (
  <Image
    src={src}
    alt={alt}
    classes={classes}
    ImageComponent={ImageComponent}
  />
);

export default Avatar;
