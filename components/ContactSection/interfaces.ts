type Validation = {
    regex: string;
    message: string;
}

export interface Field {
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