import type { FieldProps } from "./interfaces";

interface ButtonFieldProps extends FieldProps {
  type: "submit" | "reset" | "button";
}
const ButtonField = ({
  type,
  label,
  id,
  classes,
  testId,
}: ButtonFieldProps) => {
  return (
    <div className={`flex flex-col ${classes}`}>
      <button
        data-testid={testId}
        type={type}
        id={id}
        className="justify-center items-center gap-1.5 bg-indigo-700 px-4 py-2.5 rounded text-white"
      >
        {label}
      </button>
    </div>
  );
};

export type { ButtonFieldProps };

export default ButtonField;
