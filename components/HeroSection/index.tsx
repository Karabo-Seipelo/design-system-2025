import Image from 'next/image';

interface HeroSectionProps {
    imageUrl: string;
}
const HeroSection = ({
    imageUrl,
} : HeroSectionProps) => {
    return (
        <div className="flex flex-col justify-center self-stretch grow bg-gradient-to-b from-gray-50 to-[#edf0f3] rounded md:rounded-md">
            <section className="flex flex-col self-strech rounded-lg px-3 py-12">
                <div>
                    <div className="flex flex-col justify-center gap-4 self-stretch">
                        <h2 className="font-semibold text-4xl text-neutral-900 w-full">Well crafted abstract images</h2>
                        <div className="font-normal text-lg text-neutral-600 w-full">High quality abstract images for your projects, wallpaper and presentations.</div>
                    </div>
                    <div className="flex gap-4 self-stretch md:w-[458px] md:gap-8">
                        <button className="gap-1.5 grow bg-white px-5 py-3 rounded border-[0.5px] border-solid border-neutral-200">Learn more</button>
                        <button className="gap-1.5 grow bg-indigo-700 px-5 py-3 rounded text-white">See pricing</button>
                    </div>
                    <br/>
                    <div className="flex flex-col relative w-[100%] h-[30vh] md:h-[35vh]">
                        <Image src={imageUrl} alt="testing" fill={true} sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 100%" />
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default HeroSection;