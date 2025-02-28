import Image from "next/image";

interface Button {
  label: string;
  primary: boolean;
}

interface HeroSectionProps {
  title: string;
  imageUrl: string;
  description?: string;
  buttons: Button[];
  features?: string[];
}

const HeroSection = ({
  title,
  description,
  imageUrl,
  buttons,
  features,
}: HeroSectionProps) => {
  const buttonStyling = (primary: boolean) =>
    primary
      ? "w-full md:w-[213px] bg-indigo-700 py-3 rounded text-white "
      : "w-full  md:w-[213px] bg-white py-3 rounded border-[0.5px] border-solid border-neutral-200";

  return (
    <div className="w-full rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
      <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24">
        <section className="flex flex-col gap-12 md:gap-16 lg:flex-row">
          <header className="flex flex-col items-left text-left lg:basis-1/3">
            {title && (
              <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 pb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="font-normal text-lg text-neutral-600 md:text-wrap md:text-xl">
                {description}
              </p>
            )}
            {features && (
              <ul className="my-5 flex flex-col gap-5 w-full">
                {features.map((feature, index) => (
                  <li key={feature + " " + index} className="flex">
                    <Image
                      src="check-fill.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex gap-4 self-stretch mt-5">
              {buttons.map((button, index) => (
                <button
                  key={`${button.label + " " + index}`}
                  className={buttonStyling(button.primary)}
                  aria-label="Learn more"
                >
                  {button.label}
                </button>
              ))}
            </div>
          </header>
          <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:basis-2/3">
            <div className="flex w-full lg:flex-1">
              <Image
                src={imageUrl}
                alt="testing"
                height={0}
                width={0}
                className="object-cover flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
                                lg:self-stretch 2xl:h-[450px]"
              />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
