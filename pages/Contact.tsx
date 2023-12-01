"use client";
import React, { useState, useCallback, memo, FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputField: React.FC<InputFieldProps> = memo(
  ({ name, type, placeholder, value, onChange, error }) => (
    <input
      className={`bg-[#f5f5f5] text-black border ${
        error ? "border-red-500" : "border-none"
      } rounded-md w-full max-w-[500px] h-[40px] px-4 my-3 outline-none`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={error || placeholder}
    />
  )
);

interface TextAreaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = memo(
  ({ name, placeholder, value, onChange, error }) => (
    <textarea
      className={`bg-[#f5f5f5] text-black border ${
        error ? "border-red-500" : "border-none"
      } rounded-md w-full max-w-[500px] h-[120px] px-4 py-3 my-3 outline-none resize-none`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={error || placeholder}
    />
  )
);

const Contact: React.FC = () => {
  const { handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const { name, email, phoneNumber } = formData;
    const errorsCopy: Record<string, string> = {};

    // Validate Name
    if (!name.trim()) {
      errorsCopy.name = "Name is required";
    }

    // Validate Email
    setErrors({
      ...errorsCopy,
      name: errorsCopy.name || "",
      email: errorsCopy.email || "",
      phoneNumber: errorsCopy.phoneNumber || "",
    });
    return Object.keys(errorsCopy).length === 0;
  }, [formData]);

  const customHandleSubmit = useCallback(
    async (data: FieldValues, event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (validateForm()) {
        // Handle form submission logic here
        console.log(data);
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    },
    [validateForm]
  );

  return (
    <div
      className="lg:min-h-screen mt-[100px] max-[600px]:my-[75px]"
      id="contact">
      <div className="my-10 text-center text-[#526D82]">
        <h1 className="mt-12 text-4xl font-bold text-gray-20 dark:text-white">
          Contact Me
        </h1>
        <p className="text-sm text-gray-20 dark:text-white">Get in touch</p>
      </div>
      <div>
        <form
          className="flex flex-col items-center"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            customHandleSubmit(formData, event)
          }>
          {[
            { name: "name", type: "text", placeholder: "Name" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "phoneNumber", type: "text", placeholder: "Phone Number" },
          ].map((input, index) => (
            <InputField
              key={index}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name as keyof typeof formData]}
              onChange={handleInputChange}
              error={errors[input.name]}
            />
          ))}
          <TextAreaField
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                message: e.target.value,
              }))
            }
            error={errors.message}
          />
          {errors.length > 0 && (
            <span className="text-red-500">
              <div className="text-white alert alert-error w-full max-w-[500px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 stroke-current shrink-0"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! Message failed to sent</span>
              </div>
            </span>
          )}
          <button
            className="btn bg-[#32729E] text-white hover:bg-[#526D82] w-full max-w-[500px] h-[40px] my-3 border-none"
            type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
