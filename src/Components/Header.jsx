import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const step = useSelector((state) => state.step);

  return (
    <div className="bg-[url('assets/images/bg-sidebar-mobile.svg')] h-1/5 flex items-start pt-5 justify-center">
      {step.steps.map((el, index) => (
        <button
          key={index}
          className="text-white text-xl flex items-center justify-center mr-3"
        >
          <span
            className={`${
              step.step1
                ? "border-2 border-blue-900 rounded-full w-8 bg-blue-50 text-blue-900"
                : "border border-white rounded-full w-8"
            }`}
          >
            {el}
          </span>
        </button>
      ))}
    </div>
  );
}
