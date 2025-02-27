type NotFoundProps = {
    title: string;
    subTitle: string;
    description: string;
    button: {
        label: string;
        primary: boolean;
    }
}

const NotFound = ({ title, subTitle, description, button }: NotFoundProps) => {
    return (
        <div className="w-full rounded bg-abstract-background bg-cover bg-center h-screen shadow-sm md:rounded-md md:shadow-md lg:shadow-lg py-[166px] lg:p-[96px]">
            <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:items-left lg:px-0 lg:py-24">
                <section className="flex flex-col gap-12 md:gap-16">
                    <header className="flex flex-col text-left gap-2">
                        {subTitle && <small className="text-base font-semibold text-indigo-700 pb-4">{subTitle}</small>}
                        {title && <h1 className="font-semibold text-neutral-900 text-4xl md:text-5xl lg:text-6xl pb-4">{title}</h1>}
                        {description && <article className="font-normal text-lg text-neutral-600 md:text-wrap md:text-left md:text-xl">{description}</article>}
                    </header>
                    
                    <button className=" gap-1.5 grow bg-indigo-700 px-5 py-3 rounded text-white md:w-[173px]" aria-label="Learn more">{button.label}</button>
                </section>
            </div>
        </div>
    );
}

export default NotFound;