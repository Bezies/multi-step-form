import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const step = useSelector((state) => state.step);

  // // FUNCTION FOR CHANGE HEADER BACKGROUND / RESPONSIVE
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [mobile, setMobile] = useState(undefined);

  function getCurrentDimension() {
    return window.innerWidth;
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  });

  useEffect(() => {
    if (screenSize < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [screenSize]);

  return (
    <div className="bg-[url('./assets/bg-sidebar-mobile.svg')] flex items-start pt-5 justify-center md:bg-[url('./assets/bg-sidebar-desktop.svg')] h-1/5 md:bg-cover md:w-1/5 md:h-5/6 md:flex-col md:justify-start md:pl-10 md:rounded-lg md:ml-10">
      {step.steps.map((el, index) => (
        <button
          key={index}
          className="text-white text-xl flex items-center justify-center mr-3 md:mt-8"
        >
          <div className="flex items-center">
            <span
              className={`${
                el.open
                  ? "border-2 border-blue-900 rounded-full w-8 bg-blue-200 font-medium text-blue-900"
                  : "border border-white rounded-full w-8"
              }`}
            >
              {el.id}
            </span>
            {!mobile && (
              <div className="flex flex-col items-start ml-5">
                <span className="uppercase text-blue-400 text-sm">
                  {el.step}
                </span>
                <span className="uppercase text-sm font-bold">{el.name}</span>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
