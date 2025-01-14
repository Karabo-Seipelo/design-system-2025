import Image from 'next/image';

export interface Social {
    name: string;
    url: string;
    icon: string;
}

export interface ProfileCardProps {
    name: string;
    imageUrl: string;
    description: string;
    role: string;
    socials?: [Social];
}

const ProfileCard = ({
    name,
    imageUrl,
    description,
    role,
    socials,
} : ProfileCardProps) => {
    return (
        <div className="w-[340px] flex flex-col bg-white rounded-lg item-center gap-10 px-4 py-6">
            <div className="flex flex-col items-center gap-6 self-stretch">
                {imageUrl && <div className="w-16 h-16">
                    <Image src={imageUrl} className="object-cover" width={64} height={64} alt="" />          
                </div>}
            
                <div className='flex flex-col justify-center items-center gap-1 self-stretch'>
                    {name && <span className="font-medium text-xl text-center text-neutral-900 mb-0">{name}</span>}
                    {role && <small className="font-normal text-sm text-center text-neutral-600">{role}</small>}
                </div>
                {description && <div className="font-normal text-base text-center text-neutral-600">
                    {description}
                </div>}
            </div>
            <button className="flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded text-white font-medium text-base">Contact me</button>
            {socials && <ul className="flex justify-center gap-4 self-stretch">
                {socials.map(({name, url, icon}, indx) => <li key={`${name}-${indx}`}className="w-5 h-5">
                    <a href={url}>{icon}</a>
                </li>)}
            </ul>}
        </div>
    )
};

export default ProfileCard;