import Image from 'next/image';

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
    features
} : HeroSectionProps) => {
    const buttonStyling = (primary: boolean) => (primary ? "basis-1/2 md:basis-1/3 bg-indigo-700 py-3 rounded text-white " : "basis-1/2 md:basis-1/3 bg-white py-3 rounded border-[0.5px] border-solid border-neutral-200")
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:p-8 lg:py-10 pt-10 md:pb-10 self-stretch bg-gradient-to-b from-gray-50 to-[#edf0f3] shadow-md rounded p-4 max-w-[320px] sm:max-w-[768px] lg:max-w-[1440px]">
            <div className="flex flex-col lg:flex-row lg:gap-5">
                <header className="flex items-center mb-5">
                    <div className="align-items justify-content">
                        <div className="">
                            {title && <h2 className="font-semibold text-4xl text-neutral-900 w-full md:text-5xl lg:text-6xl">{title}</h2>}
                            {description && <div className="font-normal text-lg text-neutral-600 w-full py-2.5 md:text-xl">{description}</div>}
                            {features && <ul className="my-5">
                                {features.map((feature, index) => (
                                    <li key={feature + " " + index} className="flex justify-start"><Image src="check-fill.svg" width={24} height={24} alt="check" className='mr-2' />{feature}</li>
                                ))}
                            </ul>}
                        </div>
                        <div className="flex gap-4 self-stretch mt-5">
                            {buttons.map((button, index) => (
                                <button key={`${button.label + " " + index}`} className={buttonStyling(button.primary)} aria-label="Learn more">{button.label}</button>
                            ))}
                        </div>
                    </div>
                </header>
                <footer className="relative w-full max-w-xs mx-auto pb-[100%] md:max-w-2xl md:pb-[50%]">
                    <Image src={imageUrl} alt="testing" fill className="object-contain" />
                </footer>
            </div>
        </section>
    )
}

export default HeroSection;