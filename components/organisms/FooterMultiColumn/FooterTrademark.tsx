import Image from "next/image";
import DOMPurify from "dompurify";
import { FooterTrademarkProps } from "./interfaces";

const FooterTrademark: React.FC<FooterTrademarkProps> = ({
  logo,
  description = "",
  className,
}) => {
  const sanitizedDescription = DOMPurify.sanitize(description);
  return (
    <div className={`flex flex-col gap-2 lg:gap-8 ${className}`}>
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
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          aria-label="description"
        />
      )}
    </div>
  );
};

export default FooterTrademark;
