import Image from "next/image";
import { Team } from "./interfaces";

const TeamCard: React.FC<Team> = ({ imageUrl, name, description, role }) => {
  return (
    <>
      <div className="relative w-full h-[296px]">
        <Image
          src={imageUrl}
          alt={`${name}'s picture`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-xl text-neutral-900">{name}</h3>
        <p className="font-medium text-lg text-indigo-700">{role}</p>
      </div>
      <p className="font-normal text-base text-neutral-600">{description}</p>
    </>
  );
};

export default TeamCard;
