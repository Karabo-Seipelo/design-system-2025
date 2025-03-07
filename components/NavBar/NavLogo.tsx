import React from "react";
import Image from "next/image";

interface BrandProps {
  name: string;
  imageUrl: string;
  href?: string;
}

const NavLogo: React.FC<BrandProps> = ({ name, href = "#", imageUrl }) => {
  return (
    <a href={href} className="-m-1.5 p-1.5">
      <span className="sr-only">{name}</span>
      <Image
        alt={name}
        width={0}
        height={0}
        src={imageUrl}
        className="h-8 w-auto"
      />
    </a>
  );
};

export default NavLogo;
