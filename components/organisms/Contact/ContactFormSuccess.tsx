import Image from "next/image";
import { ContactFormSuccessProps } from "./interfaces";

const ContactFormSuccess: React.FC<ContactFormSuccessProps> = ({
  formStatus,
  label,
  onReset,
}) => {
  console.log("formStatus", formStatus);
  return (
    <div data-testid="success" className="flex flex-col items-center gap-6">
      {formStatus?.icon ? (
        <div className="w-16 h-16 p-4 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
          <Image
            src={formStatus.icon}
            alt={formStatus.status ?? "status icon"}
            width={0}
            height={0}
            className="w-8 h-8"
          />
        </div>
      ) : (
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      )}
      {formStatus && (
        <div className="font-normal text-xl text-center text-neutral-900">
          {formStatus.message}
        </div>
      )}
      {label && (
        <button
          onClick={onReset}
          type="button"
          id="test2"
          className="flex justify-center items-center gap-1.5 bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200 text-neutral-900"
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default ContactFormSuccess;
