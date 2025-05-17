import { FAQProps } from "./interfaces";
import HeaderFAQ from "./HeaderFAQ";
import FaqItem from "./FaqItem";
import FaqContact from "./FaqContact";

const Faq = ({ title, subTitle, articles, contactDetails }: FAQProps) => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 py-[48px] px-[16px] lg:p-[96px]">
      <HeaderFAQ title={title} subTitle={subTitle} />
      <main className="flex flex-col gap-7">
        {articles?.map(({ title, description }, index) => (
          <FaqItem
            key={`${title}-${index}`}
            title={title}
            description={description}
            showDivider={index !== articles.length - 1}
          />
        ))}
        <FaqContact {...contactDetails} />
      </main>
    </section>
  );
};

export default Faq;
