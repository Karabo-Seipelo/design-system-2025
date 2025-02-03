import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Fragment } from 'react'

interface Button {
    label: string;
    primary: boolean;
}

interface Price {
    tag?: string;
    classes?: string;
    plan: string;
    price: string,
    billedAt: string,
    description: string,
    buttons: Button[],
    features?: string[];
}

interface Tiers {
    subscription: string;
    prices: Price[];
}

interface PricingProps {
    title: string;
    subTitle: string;
    description?: string;
    featureTitle: string;
    features?: string[];
    tiers?: Tiers[];
}

const Price = ({ tag, price, description, features, buttons, classes, plan} : Price) => {
    const buttonStyling = (primary: boolean) => (primary ? "w-full bg-indigo-700 py-3 rounded text-white " : "w-full bg-white py-3 rounded border-[0.5px] border-solid border-neutral-200");
    return (
        <div className={`w-full rounded bg-white md:rounded-md md:shadow-md lg:shadow-lg outline-t-1 outline-l-1 outline-r-1 outline-b-1 outline outline-neutral-200 ${classes}`}>
            <div className="flex h-full flex-col gap-10 px-3 py-12  md:px-4 md:py-16 lg:justify-center">
                <div className="flex flex-col text-center gap-2">
                    {tag && <div className="bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 font-normal text-sm text-center text-green-70 mr-1">
                        <span className="font-normal text-sm text-center text-green-700">{tag}</span>
                    </div>}
                    {plan && <h3 className="font-semibold text-2xl text-neutral-900">{plan}</h3>}
                    <p className="font-normal text-sm text-center text-neutral-600">{description}</p>
                    <h2 className="font-semibold text-5xl text-center text-neutral-900">{price}</h2>
                   
                </div>
                {features && <ul className="my-5 flex flex-col gap-5 w-full">
                    {features.map((feature, index) => (
                        <li key={feature + " " + index} className="flex md:text-lg">
                            <Image src="check-fill.svg" width={24} height={24} alt="check" className='mr-2' />
                            {feature}
                        </li>
                    ))}
                </ul>}
                <div className="flex flex-col w-full">
                    {buttons.map((button, index) => (
                        <button key={`${button.label + " " + index}`} className={buttonStyling(button.primary)} aria-label="Learn more">{button.label}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Pricing = ({
    title,
    subTitle,
    description,
    tiers,
} : PricingProps) => {
    
    return (
        <div className="w-full rounded bg-white shadow-sm container-karabo">
            <div className="flex h-full gap-15 lg:gap-20 flex-col px-3 py-12 md:px-4 md:py-16 lg:p-24">
                <section className="flex flex-col gap-12 md:gap-16">
                    <header className="flex flex-col items-center justify-center text-center">
                        {subTitle && <small className="text-base font-semibold text-indigo-700 pb-4">{subTitle}</small>}
                        {title && <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 pb-4">{title}</h1>}
                        {description && <p className="font-normal text-lg md:text-xl text-neutral-600">{description}</p>}
                    </header>
                </section>
                <main className="flex flex-col gap-5">
                    <div className="flex flex-col w-full place-items-stretch">
                        <TabGroup className="flex lg:flex-col gap-5 lg:gap-10">
                            <TabList className="flex items-center gap-4 self-stretch outline-none">
                                {tiers && tiers.map((tier, index) => {
                                    return <Tab key={`tier-${index}`} className="justify-center items-center gap-1.5 grow px-4 py-2.5 rounded border-solid border-neutral-200 bg-white data-[selected]:border-[0.5px]">{tier.subscription}</Tab>
                                })}
                            </TabList>
                            <TabPanels className="flex flex-row gap-5">
                                {tiers && tiers.map((tier, index) => {
                                    return <TabPanel key={`tier-${index}`} className="flex flex-row gap-5">
                                        {tier.prices.map((price, index) => {
                                                return <Price key={`price-${index}`} {...price} />
                                        })}
                                    </TabPanel>
                                })}
                            </TabPanels>
                        </TabGroup>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Pricing;