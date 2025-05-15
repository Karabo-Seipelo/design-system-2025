import Image from "next/image";

export interface AvatarProps {
  imageUrl?: string;
  alt: string;
  className?: string;
  sizes?: string;
}

const Avatar = ({ imageUrl, alt, sizes, className }: AvatarProps) => (
  <div
    data-testid="avatar"
    className={`relative ${className ? className : ""}`}
  >
    <Image
      src={imageUrl ?? "/default-avatar.png"}
      fill
      alt={alt}
      sizes={sizes}
      className="object-cover"
    />
  </div>
);

export default Avatar;
