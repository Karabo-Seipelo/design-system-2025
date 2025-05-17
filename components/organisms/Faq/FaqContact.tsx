import { ContactDetails } from "./interfaces";

const FaqContact: React.FC<ContactDetails> = ({ title, content, button }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 md:p-8 rounded-lg border border-solid border-neutral-200 shadow-md">
      <div className="md:basis-[79%] lg:basis-5/6">
        <h3 className="font-semibold text-xl text-neutral-900">{title}</h3>
        <div
          className="font-normal text-base"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="md:basis-[20%] lg:basis-1/5 justify-items-end">
        <button className="flex gap-1.5 bg-indigo-700 px-5 py-3 text-white rounded">
          {button.label}
        </button>
      </div>
    </div>
  );
};

export default FaqContact;
