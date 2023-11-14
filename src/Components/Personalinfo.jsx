import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NextPagesButton from "./NextPagesButton";

export default function Personalinfo() {
  const personalValidation = useSelector((state) => state.personalValidation);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="h-1/2 bg-blue-100">
        <div className="bg-white w-10/12 rounded-md mx-auto py-5 px-3">
          <h1 className="text-2xl text-blue-800 font-bold">Personal info</h1>
          <p className="text-gray-500 mt-3">
            Please provide your name, email, address and phone number
          </p>
          <form className="flex flex-col">
            <div className="flex justify-between items-center mt-4">
              <label className="text-blue-900" htmlFor="name">
                Name
              </label>
              {personalValidation.name.error && (
                <span className="text-sm text-red-600 font-semibold">
                  This field is requiered
                </span>
              )}
            </div>

            <input
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 placeholder:text-sm placeholder:px-2 outline-violet-400 rounded py-2 px-2"
              type="text"
              placeholder="e.g.Stephen King"
            />

            <div className="flex justify-between items-center mt-4">
              <label className="text-blue-900" htmlFor="mail">
                Email Address
              </label>
              {personalValidation.mail.error && (
                <span className="text-sm text-red-600 font-semibold">
                  This field is requiered
                </span>
              )}
              {personalValidation.mail.invalid && (
                <span className="text-sm text-red-600 font-semibold">
                  Invalid mail format
                </span>
              )}
            </div>
            <input
              onChange={(e) => setMail(e.target.value)}
              className="border border-gray-400 placeholder:text-sm placeholder:px-2 outline-violet-400 rounded py-2 px-2"
              type="text"
              placeholder="e.g.stephenking@lorem.com"
            />

            <div className="flex justify-between items-center mt-4">
              <label className="text-blue-900" htmlFor="name">
                Phone Number
              </label>
              {personalValidation.phone.error && (
                <span className="text-sm text-red-600 font-semibold">
                  This field is requiered
                </span>
              )}
              {personalValidation.phone.invalid && (
                <span className="text-sm text-red-600 font-semibold">
                  Invalid phone number
                </span>
              )}
            </div>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-400 placeholder:text-sm placeholder:px-2 outline-violet-400 rounded py-2 px-2"
              type="text"
              placeholder="e.g. +1 234 567 890"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-end pr-3">
        <NextPagesButton name={name} mail={mail} phone={phone} />
      </div>
    </>
  );
}
