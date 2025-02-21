
interface Validation {
    type: "required" | "email" | "minLength" | "maxLength" | "min" | "max" | "pattern";
    value?: string | number;
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

export type { Field, TextareaFieldProps, ButtonFieldProps, InputFieldProps };