export interface FieldProps {
    id: string;
    name: string;
    label: string;
    renderType: "text" | "email" | "textarea" | "submit";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    groupWithNext?: boolean;
    classes?: string;
    characterLimit?: number;
}

export interface FormFieldsProps {
    fields: FieldProps[];
}

export interface ContactDetailsProps {
    description: string;
    icon: string;
}

export interface ContactSectionProps {
    title: string;
    description: string;
    contactDetails: ContactDetailsProps[];
    form: {
        url: string;
        fields: FieldProps[];
        notification: {
            error: {
                badge: string;
                message: string;
                status: string;
            },
            success: {
                badge: string;
                message: string;
                status: string;
            }
        }
    };
    dropShadow?: boolean;
}