import { memo } from "react";
import Image from "next/image";
import { ColumnLogoAndDescriptionProps } from "./interfaces";

const ColumnLogoAndDescription: React.FC<ColumnLogoAndDescriptionProps> = memo(
  ({ logo, description = "" }) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="relative w-[105px] h-8">
          <Image
            src={logo.image_url ?? "/fallback-logo.png"}
            fill
            alt={logo.alt ?? "Logo"}
            sizes="(max-width: 375px) 100%, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        {description && (
          <div
            className="font-normal text-base text-neutral-600"
            dangerouslySetInnerHTML={{ __html: description }}
            aria-label="description"
          />
        )}
      </div>
    );
  },
);

export default ColumnLogoAndDescription;
