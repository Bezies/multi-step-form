import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStep } from "../features/step";
import {
  Validation,
  GoBackPersonnalValidation,
} from "../features/personalValidation";

export default function Personalinfo() {
  const personalValidation = useSelector((state) => state.personalValidation);
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  // CHANGE PAGE
  useEffect(() => {
    if (personalValidation.step1Validation) {
      dispatch(changeStep({ actual: "step1", next: "step2" }));
    }
  }, [personalValidation.step1Validation]);

  function HandleNext() {
    dispatch(GoBackPersonnalValidation());
    dispatch(Validation({ name: name, mail: mail, phone: phone }));
  }

  // STATE POUR VALIDATION NOM, MAIL, PHONE
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="h-1/2 bg-blue-100 md:h-full md:ml-52 md:w-1/2 md:bg-white md:mt-20">
      <div>
        <div className="bg-white w-10/12 md:w-full rounded-lg mx-auto py-5 px-3 relative -top-20 md:top-0">
          <h1 className="text-2xl text-blue-800 font-bold md:text-4xl">
            Personal info
          </h1>
          <p className="text-gray-500 mt-3 md:text-xl">
            Please provide your name, email, address and phone number
          </p>
          <form className="flex flex-col md:mt-8">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${
                personalValidation.name.error
                  ? "border border-red-600 placeholder:text-sm placeholder:px-2 outline-none focus:border focus:border-violet-400 rounded py-2 px-2  text-blue-800 font-medium md:py-4 md:placeholder:text-lg md:placeholder:font-medium md:rounded-md"
                  : "border border-gray-400 placeholder:text-sm placeholder:px-2 outline-none focus:border focus:border-violet-400 rounded py-2 px-2  text-blue-800 font-medium md:py-4 md:placeholder:text-lg md:placeholder:font-medium md:rounded-md"
              }`}
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
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className={`${
                personalValidation.mail.error
                  ? "border border-red-600 placeholder:text-sm placeholder:px-2 outline-none focus:border focus:border-violet-400 rounded py-2 px-2 text-blue-800 font-medium md:py-4 md:placeholder:text-lg md:placeholder:font-medium md:rounded-md"
                  : "border border-gray-400 placeholder:text-sm placeholder:px-2 outline-none focus:border focus:border-violet-400 rounded py-2 px-2 text-blue-800 font-medium md:py-4 md:placeholder:text-lg md:placeholder:font-medium md:rounded-md"
              }`}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`${
                personalValidation.phone.error
                  ? "border border-red-600 placeholder:text-sm placeholder:px-2 outline-none focus:border focus:border-violet-400 rounded py-2 px-2 text-blue-800 font-medium md:py-4 md:placeholder:text-lg md:placeholder:font-medium md:rounded-md"
                  : "border border-gray-400 placeholder:text-sm placeholder:px-2 outline-none focus:border focus:border-violet-400 rounded py-2 px-2 text-blue-800 font-medium md:py-4 md:placeholder:text-lg md:placeholder:font-medium md:rounded-md"
              }`}
              type="text"
              placeholder="e.g. +1 234 567 890"
            />
          </form>
        </div>
      </div>
      <div className="flex w-10/12 mx-auto justify-end pr-3 md:w-full md:pr-3 mt-16">
        {/* <NextPagesButton name={name} mail={mail} phone={phone} /> */}
        <button
          onClick={() => HandleNext({ name: name, mail: mail, phone: phone })}
          className="bg-blue-900 text-white rounded px-4 py-2"
        >
          Next page
        </button>
      </div>
    </div>
  );
}
