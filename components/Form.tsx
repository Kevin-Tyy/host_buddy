"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    selectedDocument: "Select Document",
    message: "",
    agreeTerms: false,
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can add form submission logic here
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      agreeTerms: e.target.checked,
    });
  };
  return (
    <section className="w-full ">
      <div className="slide-reveal w-full bl:max-w-[1219px] bl:h-[882px] pa:max-w-[1200px]  py-20 bl:py-20 pa:py-20  items-center justify-center mx-auto">
        <div className="items-center justify-center mx-auto">
          <h2 className="font-mona-sans text-5xl font-semibold item text-center text-black mt-3">
            Full out the Contact Form
          </h2>
        </div>
        <p className="text-center my-5">
          We will help you to choose the best plan!
        </p>
        <form onSubmit={handleSubmit} className="w-full mt-10">
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-6">
            <div className="w-full h-[53px]">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-full h-[53px]">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="flex flex-col bl:flex-row mt-4 items-center justify-center w-full gap-6">
            <div className="w-full h-[53px]">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-full h-[56px] px-4"
                placeholder="Subject"
                required
              />
            </div>
            <div className="w-[410px] bl:w-[600px] pa:w-[400px] h-[53px]">
              <select
                id="selectedDocument"
                name="selectedDocument"
                value={formData.selectedDocument}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl w-[410px] bl:w-[600px] pa:w-[400px] h-[56px] px-4 text-left appearance-none"
                required
              >
                <option value="Select Document">Select Document</option>
                <option value="Document 1">Document 1</option>
                <option value="Document 2">Document 2</option>
                <option value="Document 3">Document 3</option>
              </select>
              <div className="relative ml-[380px] bl:ml-[570px] pa:ml-[370px]  flex items-center -top-9">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 items-center justify-center ml-1 w-full">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl w-full min-h-[150px] max-h-[500px] text-left p-4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="flex flex-col bl:flex-row justify-center items-center bl:justify-between mt-4">
            <div className="font-mona-sans text-base font-normal leading-24 tracking-tighter flex flex-row items-center text-left ml-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                className="mr-4 h-6 w-6"
                required
              />
              <label htmlFor="agreeTerms">
              <h2 className="text-[16px] leading-[24px]">I have read and accept the terms of the privacy policy - <span className="font-extrabold">HostBuddy</span>
              </h2></label>
            </div>
            <div
             
              className="bg-orange-500 text-white px-4 py-3 mt-7 bl:mt-0 rounded-md hover:bg-orange-600 h-[48px] font-semibold"
            >
              Submit Ticket
            </div>
          </div>
        </form>
    
      </div>
    </section>
  );
};
export default ContactForm;
