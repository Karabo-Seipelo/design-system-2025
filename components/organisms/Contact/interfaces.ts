import { ToastProps } from "./Toast";
import { Feature } from "$/molecules/List/interfaces";

export interface FieldProps {
  id: string;
  name: string;
  label: string;
  renderType: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  groupWithNext?: boolean;
  classes?: string;
  characterLimit?: number;
  testId?: string;
  type?: string;
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
      error: ToastProps;
      success: ToastProps;
    };
  };
  dropShadow?: boolean;
  resendForm: {
    label: string;
  };
}

export interface ContactSectionHeaderProps {
  title?: string;
  description?: string;
  dropShadow?: boolean;
  contactDetails?: Feature[];
}

export interface Field {
  id: string;
  name: string;
  label: string;
  renderType: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  groupWithNext?: boolean;
  classes?: string;
  characterLimit?: number;
  testId?: string;
  type?: string;
}

export interface ContactFormProps {
  fields: Field[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FormStatus extends ToastProps {
  icon?: string;
}

export interface ContactFormCardProps {
  formSuccess: boolean;
  formStatus?: FormStatus | null;
  label: string;
  resetHandler: () => void;
  fields: Field[];
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ContactFormSuccessProps {
  formStatus?: FormStatus | null;
  label: string;
  onReset: () => void;
}
