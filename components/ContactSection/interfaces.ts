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
        icon?: string;
      };
      success: {
        badge: string;
        message: string;
        status: string;
        icon?: string;
      };
    };
  };
  dropShadow?: boolean;
  resendForm: {
    label: string;
  };
}
