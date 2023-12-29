import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <input
    className={`bg-[#fff] shadow-sm text-black border ${
      error ? "border-red-600 placeholder-red-500" : "border-none"
    } rounded-md w-full lg:max-w-[500px] h-[40px] px-4 my-3 outline-none`}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={error || placeholder}
  />
);

export default InputField;
