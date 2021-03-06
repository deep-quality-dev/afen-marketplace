import React, { ReactNode } from "react";
import Text from "@/design-system/Text";
import { slugifyText } from "utils/misc";

interface TextInput {
  label: string;
  description?: string;
  type?: "text" | "number" | "email" | "password" | "search" | "tel";
  value?: string | number;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  error?: string;
  prepend?: ReactNode | string;
  onChange?: (text: any) => void;
}

export default function TextInput({
  label,
  value,
  icon,
  type = "text",
  placeholder,
  description,
  required,
  disabled,
  min,
  max,
  prepend,
  error,
  onChange,
}: TextInput) {
  const borderColor = [error ? "border-red-500" : "dark:border-gray-500"];

  return (
    <div className="mb-5 w-full">
      <label htmlFor={slugifyText(label)}>
        <Text bold size="small">
          {label}
          {required && <span className="text-black dark:text-white"> *</span>}
        </Text>
      </label>
      <div
        className={`inline-flex items-center w-full mt-2 border-2 ${borderColor} rounded-full px-4 py-2 focus:border-blue-500`}
      >
        {icon}
        <input
          name={slugifyText(label)}
          value={value}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          className={`py-1 dark:bg-afen-blue focus:outline-none w-full ${
            disabled ? "text-gray-600" : "dark:text-gray-300"
          }`}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="ml-2">{prepend}</div>
      </div>
      {(error || description) && (
        <Text sub size="x-small" style="mt-2">
          {error || description}
        </Text>
      )}
    </div>
  );
}
