import Image from 'next/image';

interface Feature {
    title?: string;
    description: string;
    icon: string;
}

const List = ({ features }: { features: Feature[] }) => {
    return (<ul className="flex flex-col gap-10 w-full md:gap-5">
        {features.map((feature, index) => {
            const {title, description, icon } = feature;
            return (<li className="flex flex-row gap-4 md:gap-5" key={feature.title + " " + index}>
                    <div className="h-fit rounded-full p-3">
                        <Image src={icon} alt="icon" width={0} height={0} className="min-w-[24px] md:w-full min-h-[24px] lg:h-[24px]" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 py-2.5">
                        {title && <h4 className="font-semibold text-lg">{title}</h4>}
                        {description && <p className="text-base font-normal">{description}</p>}
                    </div>
            </li>)
        })}
    </ul>)
};

export { List };

export default List;