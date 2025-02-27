import type {
  Field,
  TextareaFieldProps,
  ButtonFieldProps,
  InputFieldProps,
} from "./interfaces";

type ContactDetails = {
  description: string;
  icon: string;
};

type Validation = {
  regex: string;
  message: string;
};

type Notification = {
  badge: string;
  message: string;
  status: string;
};

type FormProps = {
  formUrl: string;
  fields: {
    fields: (Field | TextareaFieldProps | ButtonFieldProps | InputFieldProps)[];
  };
  notification?: {
    success?: Notification;
    error?: Notification;
  };
};

type ContactSectionProps = {
  title?: string;
  description?: string;
  contactDetails: ContactDetails[];
  form: FormProps;
  dropShadow?: boolean;
};

type FormFieldsProps = {
  fields: Field[];
};

export type {
  ContactSectionProps,
  FormFieldsProps,
  InputFieldProps,
  ButtonFieldProps,
  TextareaFieldProps,
  Field,
  FormProps,
  Notification,
  Validation,
  ContactDetails,
};
