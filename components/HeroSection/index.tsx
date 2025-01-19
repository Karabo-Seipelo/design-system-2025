import Image from 'next/image';

interface HeroSectionProps {
    imageUrl: string;
}
const HeroSection = ({
    imageUrl,
} : HeroSectionProps) => {
    return (
        <div className="container w-[320px] md:w-[768px] lg:w-[1440px]">
            <section className="self-strech bg-gradient-to-b from-gray-50 to-[#edf0f3] shadow-md rounded">
                <header className="">
                        <div className="">
                            <h2 className="font-semibold text-4xl text-neutral-900 w-full md:text-5xl lg:text-6xl">Well crafted abstract images</h2>
                            <div className="font-normal text-lg text-neutral-600 w-full py-2.5 md:text-xl">High quality abstract images for your projects, wallpaper and presentations.</div>
                        </div>
                        <div className="">
                            <button className="basis-1/2 gap-1.5 grow bg-white px-5 py-3 rounded border-[0.5px] border-solid border-neutral-200">Learn more</button>
                            <button className="basis-1/2  gap-1.5 grow bg-indigo-700 px-5 py-3 rounded text-white">See pricing</button>
                        </div>
                </header>
                <div className="">
                        <div className="relative w-[319px] h-[264px] md:w-[688px] md:h-[526px]">
                            <Image src={imageUrl} alt="testing" fill sizes="300px" className="object-contain" />
                        </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection;