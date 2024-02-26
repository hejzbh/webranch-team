"use client";
import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const Form = dynamic(() => import("@/app/components/Forms"));
//
const ContactForm = () => {
  return (
    <div className="w-full">
      {/** Title */}
      <h3 className="font-[500] text-[23px] text-center md:text-left">
        Let's have small talk
      </h3>
      {/* Form */}
      <Form
        onSubmit={() => {}}
        initialFormData={{ name: "", message: "" }}
        inputs={[
          {
            name: "name",
            label: "Your Name",
            required: true,
            type: "input",
            placeholder: "Your or company name",
          },
          {
            name: "message",
            label: "Message",
            placeholder: "How can we help you?",
            required: true,
            type: "textarea",
          },
        ]}
        submitBTNclassname="w-full sm:w-fit"
      />
    </div>
  );
};

export default ContactForm;
