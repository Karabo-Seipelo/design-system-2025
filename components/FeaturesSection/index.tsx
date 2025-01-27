import Image from 'next/image';

const FeatureSection = () => {
    return (<section className="container mx-auto bg-white shadow-md rounded p-4">
        <header className="flex flex-col gap-5 text-center">
            <p className="font-semibold text-base text-indigo-700">High quality images</p>
            <h1 className="font-semibold text-3xl text-neutral-900">For designers, by designers</h1>
            <p className="font-normal text-lg text-neutral-600">Unleash boundless creativity with a large repository of images optimized for designers</p>
        </header>
        <article>
            <ul className="flex flex-col gap-10">
                <li className='flex flex-row gap-5'>
                    <div className="basis-1/6">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center">
                            <Image src="hd-line.svg" width={12} height={12} className="w-6 h-6 mx-auto" alt="hd" />
                        </div>
                    </div>
                    <div className="basis-2/2">
                        <h3 className="font-semibold text-lg text-neutral-900">5k resolution support</h3>
                        <p className="font-normal text-base text-neutral-600">All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.</p>
                    </div>
                    
                </li>
                <li className='flex flex-row gap-5'>
                <div className="basis-1/6">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center">
                            <Image src="water-percent-line.svg" width={12} height={12} className="w-6 h-6 mx-auto" alt="hd" />
                        </div>
                    </div>
                    <div className="basis-2/2">
                        <h3 className="font-semibold text-lg text-neutral-900">From water to glass</h3>
                        <p className="font-normal text-base text-neutral-600">We offer a wide array of abstractions, raning from water to glass, and encompassing various styles including 3D and vector.</p>
                    </div>
                </li>
                <li className='flex flex-row gap-5'>
                    <div className="basis-1/6">
                        <div className="w-12 h-12 bg-white rounded-full  shadow-md flex items-center">
                            <Image src="rainbow-line.svg" width={12} height={12} className="w-6 h-6 mx-auto" alt="hd" />
                        </div>
                    </div>
                    <div className="basis-2/2">
                        <h3 className="font-semibold text-lg text-neutral-900">Portrait or landscape</h3>
                        <p className="font-normal text-base text-neutral-600">Effortlessly adapt your images for any platform - whether it&apos;s a stunning wallpaper or captivating Instagram reels and stories.</p>
                    </div>
                </li>
            </ul>
        </article>
        <footer></footer>
    </section>)
};

export default FeatureSection;