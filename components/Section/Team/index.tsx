import Image from "next/image";

export type Team = {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
};

export type TeamSectionProps = {
  title: string;
  subTitle: string;
  description: string;
  team: Team[];
};
const TeamSection = ({
  title,
  subTitle,
  description,
  team,
}: TeamSectionProps) => {
  return (
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
      <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
        <ul className="flex flex-col gap-12 self-stretch w-full md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {team?.map(({ name, role, imageUrl, description }, index) => (
            <li
              key={name + " " + index}
              className="flex flex-col gap-6 self-stretch md:w-[336px] lg:w-[280px]"
            >
              <Image
                src={imageUrl}
                alt={`${name}'s picture`}
                width={0}
                height={0}
                className="w-full h-auto md:h-[296px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl text-neutral-900">
                  {name}
                </h3>
                <p className="font-medium text-lg text-indigo-700">{role}</p>
              </div>
              <p className="font-normal text-base text-neutral-600">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TeamSection;
