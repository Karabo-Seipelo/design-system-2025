import { TeamSectionProps } from "./interfaces";
import TeamHeader from "./TeamHeader";
import TeamList from "./TeamList";

const TeamSection = ({
  title,
  subTitle,
  description,
  team,
}: TeamSectionProps) => {
  return (
    <main className="flex h-full gap-10 lg:gap-20 flex-col px-3 py-12 md:px-4 md:py-16 lg:p-24">
      <TeamHeader subTitle={subTitle} title={title} description={description} />
      <section className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
        <TeamList team={team} />
      </section>
    </main>
  );
};

export default TeamSection;
