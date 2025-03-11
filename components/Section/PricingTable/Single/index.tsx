import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Button {
  label: string;
  primary: boolean;
}

interface Price {
  tag?: string;
  price: string;
  description: string;
  priceType: string;
  buttons: Button[];
}

export interface PricingProps {
  title: string;
  subTitle: string;
  description?: string;
  featureTitle: string;
  features?: string[];
  prices: Price[];
}

const Price = ({ tag, price, description, priceType, buttons }: Price) => {
  const buttonStyling = (primary: boolean) =>
    primary
      ? "w-full bg-indigo-700 py-3 rounded text-white "
      : "w-full bg-white py-3 rounded border-[0.5px] border-solid border-neutral-200";
  return (
    <div className="w-full rounded bg-white md:rounded-md md:shadow-md lg:shadow-lg outline-t-1 outline-l-1 outline-r-1 outline-b-1 outline outline-neutral-200">
      <div className="flex h-full flex-col gap-10 px-3 py-12 items-center md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
        <div className="flex flex-col text-center gap-2">
          <div className="bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 font-normal text-sm text-center text-green-70 mr-1">
            <span className="font-normal text-sm text-center text-green-700">
              {tag}
            </span>
          </div>
          <h2 className="font-semibold text-5xl text-center text-neutral-900">
            {price}
          </h2>
          <p className="font-normal text-sm text-center text-neutral-600">
            {description}
          </p>
        </div>
        <div className="flex flex-col text-center self-stretch px-8">
          {priceType}
        </div>
        <div className="flex flex-col w-full">
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
      </div>
    </div>
  );
};

const Pricing = ({
  title,
  subTitle,
  description,
  featureTitle,
  features,
  prices,
}: PricingProps) => {
  return (
    <div className="w-full rounded bg-white shadow-sm">
      <div className="flex h-full gap-15 lg:gap-20 flex-col px-3 py-12 md:px-4 md:py-16 lg:p-24">
        <section className="flex flex-col gap-12 md:gap-16">
          <header className="flex flex-col items-center justify-center text-center">
            {subTitle && (
              <small className="text-base font-semibold text-indigo-700 pb-4">
                {subTitle}
              </small>
            )}
            {title && (
              <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 pb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="font-normal text-lg md:text-xl text-neutral-600">
                {description}
              </p>
            )}
          </header>
        </section>
        <main className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-2 w-full lg:w-7/12">
            {featureTitle && (
              <h2 className="font-semibold text-2xl md:text-4xl  text-neutral-900">
                {featureTitle}
              </h2>
            )}
            {features && (
              <ul className="my-5 flex flex-col gap-5 w-full">
                {features.map((feature, index) => (
                  <li key={feature + " " + index} className="flex md:text-lg">
                    <Image
                      src="/check-fill.svg"
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
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-5/12">
            {prices.map((price) => (
              <Price key={uuidv4()} {...price} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pricing;
