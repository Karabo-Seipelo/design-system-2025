import Image from "next/image";

export interface AvatarProps {
  imageUrl: string;
  alt: string;
  classes?: string;
}

const Avatar = ({ imageUrl, alt, classes }: AvatarProps) => (
  <Image src={imageUrl} className={classes} alt={alt} />
);

export default Avatar;
