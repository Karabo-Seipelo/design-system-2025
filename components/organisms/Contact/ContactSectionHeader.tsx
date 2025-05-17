import { ContactSectionHeaderProps } from "./interfaces";
import { List } from "$/molecules/List";

const ContactSectionHeader: React.FC<ContactSectionHeaderProps> = ({
  title,
  description,
  contactDetails,
  dropShadow = true,
}) => (
  <div className="flex flex-col gap-10 lg:w-1/2">
    {title && (
      <h2 className="font-semibold text-neutral-900 text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
    )}
    {description && (
      <div className="font-normal text-neutral-600 text-lg md:text-xl">
        {description}
      </div>
    )}
    {contactDetails && (
      <List features={contactDetails} dropShadow={dropShadow} />
    )}
  </div>
);

export default ContactSectionHeader;
