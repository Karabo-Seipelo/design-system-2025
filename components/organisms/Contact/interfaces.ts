import { ToastProps } from "./Toast";

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
