import Image from 'next/image';

interface Feature {
    title: string;
    description: string;
    icon: string;
}
interface FeatureSectionProps {
    imageUrl: string;
    title: string;
    subTitle: string;
    description: string;
    features?: Feature[];
    orientation?: "left" | "right";
}

const FeatureSection = ({
    imageUrl,
    subTitle,
    title,
    description,
    features,
    orientation = "right"
} : FeatureSectionProps) => {

    return (
        <div className="w-full rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
            <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
                <section className="flex flex-col gap-12 md:gap-16">
                    <header className="flex flex-col items-center justify-center text-center">
                        {subTitle && <small className="text-base font-semibold text-indigo-700 pb-4">{subTitle}</small>}
                        {title && <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 pb-4">{title}</h1>}
                        {description && <p className="font-normal text-lg text-neutral-600 md:text-wrap md:text-center md:text-xl">{description}</p>}
                    </header>
                    <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
                        <ul className="flex flex-col gap-10 lg:flex-1">
                            {features && features.map((feature, index) => (
                                <li key={feature.title + " " + index} className="flex flex-row gap-4 md:gap-5">
                                    <div className="h-fit rounded-full bg-white p-3 shadow-sm">
                                        <Image src={feature.icon} alt={feature.title} width={0} height={0} className="w-full min-h-[24px] lg:h-[24px]" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-2 py-2.5">
                                        <h4 className="font-semibold text-lg">{feature.title}</h4>
                                        <p className="text-base font-normal">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={`flex w-full lg:flex-1 ${orientation === "left" ? 'order-first' : 'order-last'}`}>
                            <Image src={imageUrl} alt="testing" height={0} width={0} className="object-cover flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
									lg:self-stretch 2xl:h-[450px]" />
                        </div>
                    </main>
                </section>
            </div>
        </div>
    );
};
export default FeatureSection;