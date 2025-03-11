import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export type Article = {
  title: string;
  description: string;
};

export type ContactDetails = {
  title: string;
  content: string;
  button: {
    label: string;
  };
};

export type FAQProps = {
  title: string;
  subTitle: string;
  articles: Article[];
  contactDetails: ContactDetails;
};

const Faq = ({ title, subTitle, articles, contactDetails }: FAQProps) => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 py-[48px] px-[16px] lg:p-[96px]">
      <header className="flex flex-col gap-5 justify-center ">
        {title && (
          <h1 className="font-semibold text-3xl md:text-5xl text-center text-neutral-900">
            {title}
          </h1>
        )}
        {subTitle && (
          <small className="font-normal text-lg md:text-xl text-center text-neutral-600">
            {subTitle}
          </small>
        )}
      </header>
      <main className="flex flex-col gap-7">
        {articles?.map(({ title, description }, index) => {
          const showDevider = index !== articles.length - 1;
          return (
            <Disclosure
              key={uuidv4()}
              as="div"
              defaultOpen={true}
              className="flex flex-col gap-4 rounded-xl"
            >
              {({ open }) => (
                <>
                  <DisclosureButton className="group flex w-full justify-between">
                    <span className="font-medium text-lg text-neutral-900 text-left">
                      {title}
                    </span>
                    {open ? (
                      <MinusCircleIcon className="size-11 text-neutral-400" />
                    ) : (
                      <PlusCircleIcon className="size-11 text-neutral-400" />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel className="font-normal text-base text-neutral-600 text-left">
                    {description}
                  </DisclosurePanel>
                  {showDevider && <div className="h-px bg-neutral-300" />}
                </>
              )}
            </Disclosure>
          );
        })}

        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 md:p-8 rounded-lg border border-solid border-neutral-200 shadow-md">
          <div className="md:basis-[79%] lg:basis-5/6">
            <h3 className="font-semibold text-xl text-neutral-900">
              {contactDetails.title}
            </h3>
            <div
              className="font-normal text-base"
              dangerouslySetInnerHTML={{ __html: contactDetails.content }}
            />
          </div>
          <div className="md:basis-[20%] lg:basis-1/5 justify-items-end">
            <button className="flex gap-1.5 bg-indigo-700 px-5 py-3 text-white rounded">
              {contactDetails.button.label}
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Faq;
