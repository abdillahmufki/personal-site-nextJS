import React from "react";

interface TextAreaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <textarea
    className={`bg-[#f5f5f5] shadow-sm text-black border ${
      error ? "border-red-600 placeholder-red-500" : "border-none"
    } rounded-md w-full lg:max-w-[500px] h-[120px] px-4 py-3 my-3 outline-none resize-none`}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={error || placeholder}
  />
);

export default TextAreaField;
