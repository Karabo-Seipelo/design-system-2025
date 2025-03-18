import React, { useState } from "react";
import type { FieldProps } from "./interfaces";

interface TextareaFieldProps extends FieldProps {
  characterLimit?: number;
}

const TextareaField = ({
  label,
  name,
  id,
  placeholder,
  required = false,
  disabled = false,
  characterLimit,
  classes = "",
  testId,
}: TextareaFieldProps) => {
  const [characterCount, setCharacterCount] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(event.target.value.length);
  };

  return (
    <div className={`flex flex-col ${classes}`}>
      <label htmlFor={id} className="font-medium text-sm">
        {label}
      </label>
      <textarea
        data-testid={testId}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        maxLength={characterLimit}
        className="bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200  min-h-[108px"
        onChange={handleChange}
      />
      {characterLimit && (
        <span className="font-normal text-sm text-right text-neutral-500">
          {characterCount}/{characterLimit}
        </span>
      )}
    </div>
  );
};

export type { TextareaFieldProps };

export default TextareaField;
