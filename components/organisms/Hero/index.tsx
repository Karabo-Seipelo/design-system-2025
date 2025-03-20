import Image from "next/image";
import Section from "$/atoms/section";
import { Button } from "@headlessui/react";

interface Button {
  label: string;
  primary: boolean;
}

export interface HeroSectionProps {
  title: string;
  imageUrl: string;
  description?: string;
  buttons: Button[];
  features?: string[];
  classes?: string;
}

const HeroSection = ({
  title,
  description,
  imageUrl,
  buttons,
  features,
  classes = "",
}: HeroSectionProps) => {
  const buttonStyling = (primary: boolean) =>
    primary
      ? "px-[12px] py-[20px] bg-indigo-600 text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] focus:bg-indigo-700 hover:bg-indigo-700 md:px-[16px] md:py-[24px]"
      : "px-[12px] py-[20px] bg-white border-[0.5px] border-[#e6e6e6] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] md:px-[11px] md:py-[19px]";

  return (
    <Section
      classes={`py-[104px] px-[12px] grid grid-cols-4 gap-8 md:grid-cols-6 lg:px-[105px] lg:py-[96px] lg:grid-cols-12 ${classes}`}
    >
      <div className="col-span-4 flex flex-col justify-center gap-4 md:gap-16 md:col-span-6 lg:col-span-5">
        <header className="flex flex-col gap-4 md:gap-6">
          {title && (
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl leading-[40px] md:leading-[48px] text-neutral-900">
              {title}
            </h1>
          )}
          {description && (
            <p className="font-normal text-lg leading-[28px] md:text-xl text-gray-600">
              {description}
            </p>
          )}
        </header>
        {features && (
          <ul className="my-5 flex flex-col gap-5 w-full">
            {features.map((feature, index) => (
              <li key={feature + " " + index} className="flex">
                <Image
                  src="/check-fill.svg"
                  width={24}
                  height={24}
                  alt="check"
                  className="mr-2"
                  quality={100}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between gap-4 md:justify-start md:flex-none">
          {buttons.map((button, index) => (
            <Button
              key={`${button.label + " " + index}`}
              className={`${buttonStyling(button.primary)} inline-flex items-center justify-center rounded font-semibold w-full focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] h-[48px] text-base md:h-[60px] md:w-[213px] lg:w-[175.5px]`}
              aria-label="Learn more"
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="col-span-4 md:col-span-6 lg:col-span-7">
        <Image
          src={imageUrl}
          alt="testing"
          height={600}
          width={800}
          className="min-h-[180px] w-full"
          quality={100}
        />
      </div>
    </Section>
  );
};

export default HeroSection;
