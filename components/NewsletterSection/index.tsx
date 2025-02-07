import List from "../List";

type Feature = {
    title?: string;
    description: string;
    icon: string;
}

const NewsletterSection = ({ title, features } : {title: string, features: Feature[]}) => {
    return (
        <div className="w-full rounded bg-white">
            <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24">
                <section className="flex flex-col gap-12">
                    <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col items-center gap-8">
                            {title && <h2 className="font-semibold text-3xl text-neutral-900">{title}</h2>}
                            {features && <List features={features} />}
                            <form className="flex flex-col gap-4 w-full">
                                <div className="flex flex-col gap-4">
                                    <input type="email" placeholder="Enter your email" className="w-full bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 lg:order-1" />
                                    <span className="font-normal text-base text-neutral-600 lg:order-3 lg:w-full">We only send you the best! No spam.</span>
                                    <button type="submit" className="bg-indigo-700 px-3.5 py-2.5 rounded w-full text-white lg:order-2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className={`flex w-full lg:flex-1`}>
                            image
                        </div>
                    </main>
                </section>
            </div>
        </div>
    )
};

export default NewsletterSection;