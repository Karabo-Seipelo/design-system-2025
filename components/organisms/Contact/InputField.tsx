import type { FieldProps } from "./interfaces";

interface InputFieldProps extends FieldProps {
  type: "text" | "email" | "password" | "number" | "tel" | "url";
}

const InputField = ({
  label,
  type,
  name,
  id,
  placeholder,
  required = false,
  disabled = false,
  classes = "",
  testId,
}: InputFieldProps) => {
  return (
    <div className={`flex flex-col ${classes}`}>
      <label htmlFor={id} className="font-medium text-sm">
        {label}
      </label>
      <input
        data-testid={testId}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="bg-neutral-50 rounded border border-solid border-neutral-200 px-3.5 py-2.5"
      />
    </div>
  );
};

export type { InputFieldProps };

export default InputField;
