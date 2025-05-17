import { TeamListProps } from "./interfaces";
import TeamCard from "./TeamCard";

const TeamList: React.FC<TeamListProps> = ({ team }) => (
  <ul className="flex flex-col gap-12 self-stretch w-full md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
    {team?.map(({ name, role, imageUrl, description }, index) => (
      <li
        key={name + " " + index}
        className="flex flex-col gap-6 self-stretch md:w-[336px] lg:w-[280px]"
      >
        <TeamCard
          name={name}
          role={role}
          imageUrl={imageUrl}
          description={description}
        />
      </li>
    ))}
  </ul>
);

export default TeamList;
