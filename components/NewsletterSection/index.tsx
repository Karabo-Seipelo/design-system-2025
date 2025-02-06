import List from "../List";

type Feature = {
    title?: string;
    description: string;
    icon: string;
}

const NewsletterSection = ({ title, features } : {title: string, features: Feature[]}) => {
    return (
        <div className="w-full rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
            <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
                <section className="flex flex-col gap-12 md:gap-16">
                    <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
                        <div className="flex flex-col items-center gap-2">
                            {title && <h2>{title}</h2>}
                            {features && <List features={features} />}
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