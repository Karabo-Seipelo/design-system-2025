import { useState } from "react";
import Image from "next/image";
import Form from "next/form";
import axios from "axios";
import List from "../List";

type Feature = {
    title?: string;
    description: string;
    icon: string;
}

type Notification = {
    badge: string;
    message: string;
    status: string;
}

type NewsletterSectionProps = {
    title: string, 
    features: Feature[], 
    imageUrl: string,
    newsLetterURL?: string,
    form: {
        instrunction: string,
        label: string,
        placeholder: string,
    }
    toast: {
        success: Notification,
        error: Notification
    }
}

type NewsLetterFormProps = {
    submitHander: (formData: FormData) => void,
    instrunction: string,
    label: string,
    placeholder: string
}

type ToastProps = {
    status: string,
    message: string,
    badge: string
}

const Toast = ({status, message, badge}: ToastProps) => {
     
    return (<div className={`absolute flex w-full md:w-max items-center gap-3 pl-1 pr-2.5 pt-1 pb-1 rounded-[2000px] top-5 left-1/2 -translate-x-1/2 ${status === "SUCCESS" ? "bg-green-50" : "bg-red-50"}`}>
        <div className={`bg-white px-2.5 py-0.5 rounded-full font-medium text-sm text-center ${status === "SUCCESS" ? "text-green-700" : "text-red-800"}`}>
            {badge}
        </div>
        <div className={`font-medium text-sm gap-1 ${status === "SUCCESS" ? "text-green-700" : "text-red-600"}`}>
            <p>{message}</p>
        </div>
    </div>)
}

const NewsLetterForm = ({ submitHander, instrunction, label, placeholder }: NewsLetterFormProps) => {
    return (<Form className="flex flex-col gap-4 w-full" action={submitHander}>
        <div className="flex flex-col md:flex-row gap-4 md:flex-wrap">
            <input name="email" type="email" placeholder={placeholder} className="basis-full md:basis-1/2 bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 lg:order-1" required />
            <span className="font-normal text-base text-neutral-600 md:order-3 md:basis-full">{instrunction}</span>
            <button type="submit" className="bg-indigo-700 px-3.5 py-2.5 rounded basis-full text-white md:basis-1/6 md:order-2">{label}</button>
        </div>
    </Form>)
}

const NewsletterSection = ({ title, features, imageUrl, newsLetterURL = "/search", toast, form} : NewsletterSectionProps) => {
    const [notification, setNotification] = useState<Notification | null>(null);
    const submitHander = async (formData: FormData) => {
        setNotification({message: "", status: "", badge: ""});
        try {
            const email = formData.get("email");
            const response = await axios.post(newsLetterURL, {email});
            if (response.status === 200) {
                const {message, status, badge} = toast.success;
                setNotification({message, status, badge});
            } else {
                const {message, status, badge} = toast.error;
                setNotification({message, status, badge});
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full rounded bg-white relative">
            {notification && <Toast {...notification} />}
            <div className="flex h-full px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24 lg:h-full">
                <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8 lg:h-full">
                    <div className="flex flex-col items-center gap-8 lg:gap-2 lg:items-end lg:basis-1/2">
                        {title && <h2 className="font-semibold text-3xl text-neutral-900 md:text-5xl">{title}</h2>}
                        {features && <List features={features} />}
                        <NewsLetterForm submitHander={submitHander} {...form} />
                    </div>
                    <div className="flex w-full lg:basis-1/2 lg:h-full">
                        {imageUrl && <div className="flex w-full lg:flex-1">
                            <Image src={imageUrl} alt="testing" height={0} width={0} className="flex min-h-[180px] w-full justify-center rounded-lg object-cover md:h-[394px] lg:h-auto
                                    lg:self-stretch 2xl:h-[450px]" />
                        </div>}
                    </div>
                </main>
            </div>
        </div>
    )
};

export default NewsletterSection;