import Image from "next/image";
import List from "../List";

type Feature = {
    title?: string;
    description: string;
    icon: string;
}

type NewsletterSectionProps = {
    title: string, 
    features: Feature[], 
    imageUrl: string
}

const NewsletterSection = ({ title, features, imageUrl } : NewsletterSectionProps) => {
    return (
        <div className="w-full rounded bg-white">
            <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24">
                <section className="flex flex-col gap-12">
                    <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col items-center gap-8 lg:gap-20 lg:basis-1/2">
                            {title && <h2 className="font-semibold text-3xl text-neutral-900">{title}</h2>}
                            {features && <List features={features} />}
                            <form className="flex flex-col gap-4 w-full">
                                <div className="flex flex-col md:flex-row gap-4 md:flex-wrap">
                                    <input type="email" placeholder="Enter your email" className="basis-full md:basis-1/2 bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 lg:order-1" />
                                    <span className="font-normal text-base text-neutral-600 md:order-3 md:basis-full">We only send you the best! No spam.</span>
                                    <button type="submit" className="bg-indigo-700 px-3.5 py-2.5 rounded basis-full text-white md:basis-1/6 md:order-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className={`flex w-full lg:basis-1/2`}>
                            {imageUrl && <div className="flex w-full lg:flex-1">
                                <Image src={imageUrl} alt="testing" height={0} width={0} className="flex min-h-[180px] w-full justify-center rounded-lg object-cover shadow-lg md:h-[394px] lg:h-auto
                                        lg:self-stretch 2xl:h-[450px]" />
                            </div>}
                        </div>
                    </main>
                </section>
            </div>
        </div>
    )
};

export default NewsletterSection;