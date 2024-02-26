"use client";
import React, { useEffect, useMemo, useState } from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { FormInput } from "@/app/types/form";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
const Button = dynamic(() => import("@/app/components/ui/Button"));
// Components

// Interface
interface FormProps {
  title?: string;
  description?: string;
  className?: string;
  onSubmit: (fprmData: any) => void; //eslint-disable-line
  inputs: FormInput[];
  formClassName?: string;
  initialFormData?: any;
  submitBTNclassname?: string;
  submitTitle?: string;
  textContainerClassName?: string;
  disabledTitle?: string;
  children?: React.ReactNode;
  labelClassName?: string;
}
const Form = ({
  title,
  description,
  className = "",
  initialFormData = {},
  submitBTNclassname = "",
  formClassName = "",
  submitTitle = "Submit",
  labelClassName = "",
  disabledTitle = "Please fill in inputs",
  onSubmit = () => {},
  children,
  inputs,
}: FormProps) => {
  const [formData, setFormData] = useState<any>({ ...initialFormData });
  const isDisabled = useMemo<boolean>(() => {
    return Object.entries(formData).some(
      ([key, value]) =>
        (!value || value === "") &&
        inputs.find((inp) => inp.name === key)?.required
    );
  }, [formData, inputs]);

  useEffect(() => {
    if (!initialFormData || formData) return;
    setFormData({ ...initialFormData });
  }, [initialFormData]); // eslint-disable-line

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((formData: any) => ({ ...formData, [name]: value }));
  };

  return (
    <div
      className={`${className} flex flex-col  w-full items-center justify-center`}
    >
      {/**  Title ? */}
      {title && <Title text={title} size="small" />}
      {/** Description ? */}
      {description && <Description text={description} />}

      {/** FORM */}
      <form
        className={`mt-10 w-full ${formClassName}`}
        onSubmit={(e) => {
          e.preventDefault();
          if (!isDisabled) {
            onSubmit(formData);
          }
        }}
      >
        <div className={`grid grid-cols-1 gap-7  ${formClassName}`}>
          {inputs?.map((input, i) => {
            const Icon = input.Icon;
            switch (input.type) {
              case "input":
                return (
                  <div
                    className="group relative flex w-full flex-col space-y-2"
                    key={i}
                  >
                    {input.label && (
                      <label
                        className={`text-formGray px-1 text-common-black font-[500] text-[14px] sm:text-[15px] md:text-[16px] ${labelClassName}`}
                        htmlFor={input.name}
                      >
                        {input.label}
                      </label>
                    )}

                    <input
                      onChange={handleInputChange}
                      name={input.name}
                      value={formData[input.name] || ""}
                      type={input.inputType}
                      placeholder={`${input.placeholder || ""} ${
                        input.required ? " *" : ""
                      }`}
                      className={`rounded-3xl shadow-md w-full bg-white border-none outline-none p-3`}
                    />
                    {Icon && (
                      <Icon className="absolute left-5 top-[50%] translate-y-[-70%] text-[18px] text-text transition-all duration-300 ease-in-out group-hover:text-main/80 sm:text-[19x] md:text-[20px]" />
                    )}
                  </div>
                );
              case "textarea":
                return (
                  <div className="relative flex flex-col space-y-2" key={i}>
                    {input.label && (
                      <label
                        className={`text-formGray px-1 text-common-black font-[500] text-[14px] sm:text-[15px] md:text-[16px] ${labelClassName}`}
                        htmlFor={input.name}
                      >
                        {input.label}
                      </label>
                    )}
                    <textarea
                      onChange={handleInputChange as any}
                      name={input.name}
                      value={formData[input.name] || ""}
                      rows={4}
                      cols={6}
                      placeholder={input.placeholder}
                      className={`rounded-3xl shadow-md w-full bg-white border-none outline-none p-3 resize-none`}
                    ></textarea>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        {/** Submit BTN */}
        <div>
          <Button
            type="submit"
            text={isDisabled ? disabledTitle : submitTitle}
            disabled={isDisabled}
            className={`disabled:opacity-50 mt-10 ${submitBTNclassname}`}
          />
        </div>
      </form>
      {children && children}
    </div>
  );
};

export default Form;
