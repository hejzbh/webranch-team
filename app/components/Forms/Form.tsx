"use client";
import React, { useEffect, useMemo, useState } from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { FormInput } from "@/app/types/form";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
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
  disabledTitle,
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
    <div className={`${className} flex flex-col items-center justify-center`}>
      {/**  Title ? */}
      {title && <Title text={title} size="small" />}
      {/** Description ? */}
      {description && <Description text={description} />}

      {/** FORM */}
      <form
        className={`mt-10 ${formClassName}`}
        onSubmit={(e) => {
          e.preventDefault();
          if (!isDisabled) {
            onSubmit(formData);
          }
        }}
      >
        <div className={`grid grid-cols-1 gap-7 ${formClassName}`}>
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
                        className={`text-formGray absolute left-3 top-[-4px] ml-3 bg-white px-1 text-[14px] sm:text-[15px] md:text-[16px] ${labelClassName}`}
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
                      className={`rounded-[2.5rem] border-[2px] border-grayBorder text-[14px] text-text  shadow-md transition-all duration-300 ease-in-out hover:border-main/40 focus:border-main/60 md:text-[16px] ${
                        input.label ? "py-4 pl-[3rem] pr-3" : "px-3 py-2"
                      }`}
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
                        className={`text-formGray absolute left-3 top-[-4px] ml-3 bg-white px-1 text-[14px] sm:text-[15px] md:text-[16px] ${labelClassName}`}
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
                      className="resize-none rounded-[2.5rem] border-[2px] border-grayBorder px-3 py-2 text-text shadow-md !outline-none transition-all duration-300 ease-in-out hover:border-main/40 focus:border-main/60"
                    ></textarea>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        {/** Submit BTN */}
        <div className="w-full text-right">
          <button
            type="submit"
            title={isDisabled ? disabledTitle : submitTitle}
            disabled={isDisabled}
            className={`mt-5 w-full rounded-[4rem] border-2 border-main bg-main p-2 text-center text-[15px] text-white shadow-sm drop-shadow-sm transition-all duration-300 ease-in-out hover:bg-transparent hover:text-main hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 sm:text-[16px] md:p-3 md:text-[17px] ${submitBTNclassname}`}
          >
            {submitTitle}
          </button>
        </div>
      </form>
      {children && children}
    </div>
  );
};

export default Form;
