import { List } from "../List";

import TextareaField from "./TextareaField";
import InputField from "./InputField";
import ButtonField from "./ButtonField";

type ContactDetails = {
    description: string;
    icon: string;
}

type Validation = {
    regex: string;
    message: string;
}

interface Field {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    validation?: Validation[];
    classes?: string;
    required?: boolean;
    disabled?: boolean;
    groupWithNext?: boolean;
}

interface TextareaFieldProps extends Field {
    characterLimit?: number;
}

interface ButtonFieldProps extends Field {
    type: "submit" | "reset" | "button";
}

interface InputFieldProps extends Field {
    type: "text" | "email" | "password" | "number" | "tel" | "url";
}

type Notification = {
    badge: string;
    message: string;
    status: string;
}

type FormProps = {
    formUrl: string,
    fields: {
        fields: (Field | TextareaFieldProps | ButtonFieldProps | InputFieldProps)[];
    }
    notification?: {
        success?: Notification,
        error?: Notification
    }
}

type ContactSectionProps = {
    title?: string;
    description?: string;
    contactDetails: ContactDetails[]
    form: FormProps;
    dropShadow?: boolean;
}

type FormFieldsProps = {
    fields: Field[];
};

const FormFields: React.FC<FormFieldsProps> = ({ fields }) => {
    return (
        <>
            {fields.map((field, index) => {
                const FieldComponent = field.type === "textarea" ? TextareaField : field.type === "submit" ? ButtonField : InputField;
                const nextField = fields[index + 1];
                const isGrouped = field.groupWithNext && nextField;

                if (isGrouped) {
                    return (<div key={index} className={`flex flex-col gap-10 ${isGrouped ? 'lg:flex-row' : ''}`}>
                        <FieldComponent {...field} classes={`${field.classes} lg:w-1/2`} />
                        {isGrouped && <FieldComponent {...nextField} classes={`${field.classes} lg:w-1/2`} />}
                    </div>)
                }

                if (index > 0 && fields[index -1].groupWithNext) {
                    return null
                }

                return (
                    <div key={index} className="flex flex-col gap-10">
                        <FieldComponent {...field} />
                    </div>
                );

            })}
        </>
    );
};

const ContactSection = ({ title, description, contactDetails, form, dropShadow = true} : ContactSectionProps) => {
    const { fields } = form;

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
                                    <FormFields fields={fields} />
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