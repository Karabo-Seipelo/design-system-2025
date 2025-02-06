import Image from 'next/image';

type StatisticsSectionProps = {
    title: string;
    subTitle?: string;
    description?: string;
    imageUrl?: string;
    statisticsTitle: string;
    statistics: ListCardProps[];
};

type ListCardProps = {
    statistic: string;
    label: string;
};

const ListCard = ({ statistics }: { statistics: ListCardProps[]}) => {
    return (
        <div className="flex flex-col gap-10 lg:flex-1">
            {statistics.map(({statistic, label}, index) => (
                <div key={statistic + " " + index}  className="flex flex-col justify-center items-center self-stretch bg-white py-6 rounded-lg border border-solid border-neutral-200">
                    <h3 className="font-bold text-5xl text-center text-indigo-700">{statistic}</h3>
                    <p className="font-normal text-xl text-center text-neutral-600">{label}</p>
                </div>
            ))}
        </div>
    );
};

const StatisticsSection = ({title, subTitle, description, imageUrl, statisticsTitle,statistics} : StatisticsSectionProps) => {
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
                        {imageUrl && <div className={`flex w-full lg:flex-1`}>
                            <Image src={imageUrl} alt="testing" height={0} width={0} className="flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
                                    lg:self-stretch 2xl:h-[450px]" />
                        </div>}
                        <div className="flex flex-col gap-5 lg:flex-1">
                            <p>{statisticsTitle}</p>
                            <ListCard statistics={statistics} />
                        </div>
                    </main>
                </section>
            </div>
        </div>
    )
};
 
export default StatisticsSection;