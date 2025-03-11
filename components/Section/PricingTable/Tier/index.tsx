import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";

export type Button = {
  label: string;
  primary: boolean;
};

export type Price = {
  highlight?: boolean;
  tag?: string;
  classes?: string;
  plan: string;
  price: string;
  billedAt: string;
  description: string;
  buttons: Button[];
  features?: string[];
};

export type Tiers = {
  subscription: string;
  prices: Price[];
};

export type PricingProps = {
  title: string;
  subTitle: string;
  description?: string;
  featureTitle: string;
  features?: string[];
  tiers?: Tiers[];
};

const PriceTable = ({
  tag,
  price,
  description,
  features,
  buttons,
  classes,
  plan,
  billedAt,
  highlight = false,
}: Price) => {
  const buttonStyling = (primary: boolean) =>
    primary
      ? "w-full bg-indigo-700 py-3 rounded text-white "
      : "w-full bg-white py-3 rounded border-[0.5px] border-solid border-neutral-200";
  return (
    <div
      className={`flex flex-col gap-y-8 w-full bg-white border-solid rounded-lg ${classes} ${highlight ? "border-2 border-solid border-indigo-700 shadow-[0_25px_50px_rgba(0,0,0,0.25)]" : "border border-solid border-neutral-200"}`}
    >
      {highlight && tag && (
        <div className="bg-indigo-50 py-4 rounded-tl-lg rounded-tr-lg items-center self-stretch font-bold text-xl text-center text-indigo-700">
          {tag}
        </div>
      )}
      <div
        className={`flex flex-col gap-8 h-full ${highlight ? "px-8 pb-8" : "p-8"}`}
      >
        <div className="flex flex-col text-left gap-4">
          {plan && (
            <h3 className="font-semibold text-2xl text-neutral-900">{plan}</h3>
          )}
          <p className="font-normal text-sm text-neutral-600">{description}</p>
          <h2
            className={`font-semibold text-5xl ${highlight ? "text-indigo-700" : "text-neutral-900"}`}
          >
            {price}
          </h2>
          <small>{billedAt}</small>
        </div>
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
        <div className="flex flex-col w-full mt-auto">
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

/**
 *
 * @param title - Required
 * @param subTitle - Optional
 * @param description - Optional
 * @param tiers - Array of Tiers
 * @returns
 */
const Pricing = ({ title, subTitle, description, tiers }: PricingProps) => {
  return (
    <div className="w-full rounded bg-white shadow-sm">
      <div className="flex h-full gap-10 lg:gap-20 flex-col px-3 py-12 md:px-4 md:py-16 lg:p-24">
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
        <TabGroup className="flex flex-col gap-5 lg:gap-10">
          <TabList className="flex flex-row items-center gap-4 self-stretch outline-none w-full md:w-[280px] md:m-auto">
            {tiers?.map((tier) => {
              return (
                <Tab
                  key={uuidv4()}
                  className="justify-center items-center gap-1.5 grow px-4 py-2.5 rounded border-solid border-neutral-200 bg-white data-[selected]:border-[0.5px]"
                >
                  {tier.subscription}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels className="flex flex-row gap-5 md:w-full">
            {tiers?.map((tier, index) => {
              return (
                <TabPanel
                  key={`${tier.subscription}-${index++}`}
                  className="flex flex-col w-full lg:flex-row gap-y-8 lg:gap-x-8 mt-12"
                >
                  {tier.prices.map((price) => {
                    return <PriceTable key={uuidv4()} {...price} />;
                  })}
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Pricing;
