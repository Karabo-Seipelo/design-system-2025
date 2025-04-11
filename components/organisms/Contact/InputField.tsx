import { Input, Label, Field } from "@headlessui/react";

interface InputFieldProps {
  label: string;
  name: string;
  id: string;
  classes?: string;
  testId?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type: string;
}

const InputField = ({
  label,
  name,
  id,
  placeholder,
  required = false,
  disabled = false,
  classes = "",
  testId,
  type,
}: InputFieldProps) => {
  return (
    <Field data-testid="field" className={`flex flex-col ${classes}`}>
      <Label htmlFor={id} className="font-medium text-sm">
        {label}
      </Label>
      <Input
        data-testid={testId}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="bg-neutral-50 rounded border border-solid border-neutral-200 px-3.5 py-2.5"
        as="input"
      />
    </Field>
  );
};

export type { InputFieldProps };

export default InputField;
