import React from 'react';
import type { InputFieldProps } from "./types";

const InputField = ({ label, type, name, id, placeholder, required = false, disabled = false, classes = "" }: InputFieldProps) => {
    return (
        <div className={`flex flex-col ${classes}`}>
            <label htmlFor={id} className="font-medium text-sm">{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} required={required} disabled={disabled} className="bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200" />
        </div>
    )
}

export type { InputFieldProps };

export default InputField;