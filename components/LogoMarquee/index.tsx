import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

type Logos = {
  imageUrl: string;
  alt: string;
};

export type LogoMarqueeProps = {
  title: string;
  logos: Logos[];
  classes?: string;
};

const LogoMarquee = ({ logos, title, classes = "" }: LogoMarqueeProps) => {
  return (
    <div
      className={`flex flex-1 flex-col items-center gap-8 overflow-hidden w-full ${classes}`}
    >
      {title && (
        <h3 className="font-medium text-base text-center text-neutral-600">
          {title}
        </h3>
      )}
      <div className="flex flex-1 flex-row gap-8 scroll-auto animate-marquee">
        {[...logos, ...logos].map(({ imageUrl, alt }) => (
          <Image
            key={uuidv4()}
            src={imageUrl}
            alt={alt}
            height={0}
            width={0}
            className="h-auto w-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
