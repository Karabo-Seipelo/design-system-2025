import Image from "next/image";

export type StatisticsSectionProps = {
  title: string;
  subTitle?: string;
  description?: string;
  imageUrl?: string;
  statisticsTitle: string;
  statistics: ListCardProps[];
  classes?: string;
};

export type ListCardProps = {
  statistic: string;
  label: string;
};

const ListCard = ({ statistics }: { statistics: ListCardProps[] }) => {
  return (
    <div className="flex flex-col gap-10 lg:flex-1">
      {statistics?.map(({ statistic, label }, index) => (
        <div
          key={statistic + " " + index}
          className="flex flex-col justify-center items-center self-stretch bg-white py-6 rounded-lg border border-solid border-neutral-200"
        >
          <h3 className="font-bold text-4xl md:text-5xl text-center text-indigo-700">
            {statistic}
          </h3>
          <p className="font-normal text-xl text-center text-neutral-600">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

const StatisticsSection = ({
  title,
  subTitle,
  description,
  imageUrl,
  statisticsTitle,
  statistics,
  classes = "",
}: StatisticsSectionProps) => {
  return (
    <div
      className={`flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24 ${classes}`}
    >
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
            <p className="font-normal text-lg text-neutral-600 md:text-wrap md:text-center md:text-xl">
              {description}
            </p>
          )}
        </header>
        <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:h-full">
          {imageUrl && (
            <div className={`flex w-full lg:flex-1 lg:h-max`}>
              <Image
                src={imageUrl}
                alt="testing"
                height={0}
                width={0}
                className="flex w-full min-h-[180px] object-cover md:h-[394px] lg:self-stretch lg:h-[500px]"
              />
            </div>
          )}
          <div className="flex flex-col gap-5 lg:flex-1 lg:h-auto">
            <p>{statisticsTitle}</p>
            <ListCard statistics={statistics} />
          </div>
        </main>
      </section>
    </div>
  );
};

export default StatisticsSection;
