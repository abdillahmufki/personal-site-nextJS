"use client";
import React, { useState, useCallback } from "react";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import { useForm } from "@formspree/react";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name as keyof FormData]: value,
      }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const { name, email, phoneNumber, message } = formData;
    const errorsCopy: Errors = {};

    // Validate Name
    if (!name.trim()) {
      errorsCopy.name = "Name is required";
    }

    // Validate Email
    if (!email.trim()) {
      errorsCopy.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsCopy.email = "Email is invalid";
    }

    // Validate Phone Number
    if (!phoneNumber.trim()) {
      errorsCopy.phoneNumber = "Phone Number is required";
    }

    // Validate Message
    if (!message.trim()) {
      errorsCopy.message = "Message is required";
    }

    setErrors(errorsCopy);
    return Object.keys(errorsCopy).length === 0;
  }, [formData]);

  const [state, handleSubmit] = useForm("xzbwlklj");

  const customHandleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validateForm()) {
        handleSubmit(e);
      }
    },
    [handleSubmit, validateForm]
  );

  return (
    <div
      className="lg:min-h-screen mt-[100px] max-[600px]:my-[75px]"
      id="contact">
      <div className="my-10 text-center text-[#526D82]">
        <h1 className="mt-12 text-4xl font-bold">Contact Me</h1>
        <p className="text-sm">Get in touch</p>
      </div>
      <div>
        <form
          className="flex flex-col items-center"
          onSubmit={customHandleSubmit}>
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
              value={formData[input.name]}
              onChange={handleInputChange}
              error={errors[input.name]}
            />
          ))}
          <TextAreaField
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
          />
          {state && state.errors && (
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

          {state && state.succeeded ? (
            <div className="text-white w-full max-w-[500px] alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-current shrink-0"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Message has been sent</span>
            </div>
          ) : (
            <button
              className="btn bg-[#32729E] text-white hover:bg-[#526D82] w-full max-w-[500px] h-[40px] my-3 border-none"
              type="submit"
              disabled={state && state.submitting}>
              Send
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
