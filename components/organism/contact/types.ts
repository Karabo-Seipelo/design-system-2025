import type { FieldProps } from "./interfaces";

import { TextareaFieldProps } from "./TextareaField";
import { ButtonFieldProps } from "./ButtonField";
import { InputFieldProps } from "./InputField";

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
    fields: (
      | FieldProps
      | TextareaFieldProps
      | ButtonFieldProps
      | InputFieldProps
    )[];
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
  InputFieldProps,
  ButtonFieldProps,
  TextareaFieldProps,
  FieldProps,
  FormProps,
  Notification,
  Validation,
  ContactDetails,
};
