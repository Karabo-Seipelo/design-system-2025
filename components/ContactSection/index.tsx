import { List } from "../List";
type ContactDetails = {
    description: string;
    icon: string;
}

type ContactSectionProps = {
    title?: string;
    description?: string;
    contactDetails: ContactDetails[]
    dropShadow?: boolean;
}

const ContactSection = ({ title, description, contactDetails, dropShadow = true} : ContactSectionProps) => {
    return (
        <div className="w-full rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
            <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
                <section className="flex flex-col gap-12 md:gap-16 lg:w-full">
                    <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:w-full">
                        <div className="flex flex-col gap-10 lg:w-1/2">
                            {title && <h2 className="font-semibold text-neutral-900 text-4xl md:text-5xl lg:text-6xl">{title}</h2>}
                            {description && <div className="font-normal text-neutral-600 text-lg md:text-xl">{description}</div>}
                            {contactDetails && <List features={contactDetails} dropShadow={dropShadow} />}
                        </div>
                        <div className="flex flex-col gap-10 lg:w-1/2">
                            <div className="flex flex-col gap-10 grow bg-white p-8 rounded-lg border border-solid border-neutral-200 drop-shadow-md">
                               <form className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-10 lg:flex-row">
                                        <div className="flex flex-col gap-2 lg:w-1/2">
                                            <label htmlFor="name" className="font-medium text-sm text-neutral-700">Name</label>
                                            <input type="text" name="name" id="name" placeholder="Your name" className="bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200" />
                                        </div>
                                        <div className="flex flex-col gap-2 lg:w-1/2">
                                            <label htmlFor="email" className="font-medium text-sm text-neutral-700">Email</label>
                                            <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 lg:w-full">
                                        <label htmlFor="message" className="font-medium text-sm text-neutral-700">Message</label>
                                        <textarea name="message" id="message" placeholder="Write your message..." className="bg-neutral-50 px-3.5 py-2.5 rounded-lg border border-solid border-neutral-200" />
                                        <span className="font-normal text-sm text-right text-neutral-500">0/500</span>
                                    </div>
                                    <div className="flex flex-col gap-10 lg:w-full">
                                        <button type="submit" className="justify-center items-center gap-1.5 bg-indigo-700 px-4 py-2.5 rounded text-white">Send</button>
                                    </div>
                               </form>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    )
}

export default ContactSection