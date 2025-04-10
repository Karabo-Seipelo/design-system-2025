import { Button, Field } from "@headlessui/react";

export enum ButtonFieldType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

interface ButtonFieldProps {
  type?: ButtonFieldType;
  label: string;
  id: string;
  classes?: string;
  testId?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}
const ButtonField = ({
  type,
  label,
  id,
  classes,
  testId,
}: ButtonFieldProps) => {
  return (
    <Field data-testid="field" className={`flex flex-col ${classes}`}>
      <Button
        data-testid={testId}
        type={type}
        id={id}
        className="justify-center items-center gap-1.5 bg-indigo-700 px-4 py-2.5 rounded text-white"
      >
        {label}
      </Button>
    </Field>
  );
};

export type { ButtonFieldProps };

export default ButtonField;
