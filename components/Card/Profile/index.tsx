import Image from "next/image";

export enum SocialIcons {
  GitHub = "github",
  LinkedIn = "linkedin",
  Instagram = "instagram",
  X = "x",
}
export interface Socials {
  name: string;
  url: string;
  icon: SocialIcons;
}

export interface ProfileCardProps {
  name: string;
  imageUrl: string;
  description: string;
  role: string;
  socials: Socials[];
  button: {
    label: string;
  };
  classes?: string;
}

const ProfileCard = ({
  name,
  imageUrl,
  description,
  role,
  socials,
  button,
  classes = "",
}: ProfileCardProps) => {
  return (
    <div
      className={`w-[340px] flex flex-col bg-white rounded-lg items-center gap-9 px-4 py-6 ${classes}`}
    >
      <div className="flex flex-col items-center gap-6 self-stretch">
        {imageUrl && (
          <div className="w-16 h-16">
            <Image
              src={imageUrl}
              className="object-cover"
              width={64}
              height={64}
              alt=""
            />
          </div>
        )}

        <div className="flex flex-col justify-center items-center gap-1 self-stretch">
          {name && (
            <span className="font-medium text-xl text-center text-neutral-900 mb-0">
              {name}
            </span>
          )}
          {role && (
            <small className="font-normal text-sm text-center text-neutral-600">
              {role}
            </small>
          )}
        </div>
        {description && (
          <div className="font-normal text-base text-center text-neutral-600">
            {description}
          </div>
        )}
      </div>
      <button className="flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded text-white font-medium text-base">
        {button.label}
      </button>
      {
        <ul className="flex justify-center gap-4 self-stretch">
          {socials.map(({ name, url, icon }, indx) => (
            <li key={`${name}-${indx}`} className="w-5 h-5">
              <a
                href={url}
                className={`icon-${icon} text-base`}
                aria-label={`Link to ${name}'s ${icon} profile`}
              ></a>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default ProfileCard;
