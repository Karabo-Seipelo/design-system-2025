import { ToastProps } from "$/organisms/Toast";
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
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
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
  fields: Field[];
  resetHandler: () => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ContactFormSuccessProps {
  formStatus?: FormStatus | null;
  label: string;
  onReset: () => void;
}

export interface UseFormSubmitProps {
  url: string;
  success: ToastProps;
  error: ToastProps;
}

export interface Status extends ToastProps {
  icon?: string;
}

export interface UseFormSubmitReturn {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formStatus: Status | null;
  formSuccess: boolean;
  setFormStatus: React.Dispatch<React.SetStateAction<Status | null>>;
  setFormSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
