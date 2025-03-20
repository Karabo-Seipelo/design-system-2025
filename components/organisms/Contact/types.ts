import type { FieldProps } from "./interfaces";

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
    fields: FieldProps;
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
  fields: FieldProps[];
};

export type {
  ContactSectionProps,
  FormFieldsProps,
  FieldProps,
  FormProps,
  Notification,
  Validation,
  ContactDetails,
};
