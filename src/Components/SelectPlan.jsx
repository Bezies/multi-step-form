import React, { useState } from "react";
import "./selectPlan.css";
import NextPagesButton from "./NextPagesButton";
import { useDispatch, useSelector } from "react-redux";
import { PriceOfPlan } from "../features/plan";

export default function SelectPlan() {
  const [yearly, setYearly] = useState(false);

  // CHOICE MONTH / YEAR
  function HandleChoose(e) {
    if (e.target.checked) {
      setYearly(true);
    } else {
      setYearly(false);
    }
  }

  // ADD PRICE
  const [PlanPrice, setPlanPrice] = useState("");

  function handleSelectPlan(e) {
    if (e.target.checked) {
      setPlanPrice(e.target.value);
    }
  }

  // SAVE PRICE
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);

  console.log(plan);

  return (
    <div className="h-1/2 bg-blue-100">
      <div className="bg-white w-10/12 rounded-md mx-auto py-5 px-3">
        <h1 className="text-2xl text-blue-800 font-bold">Select your plan</h1>
        <p className="text-gray-500 mt-3">
          You have the option of monthly or yearly billing
        </p>

        <form className="mt-4">
          <div>
            <input
              onChange={(e) => handleSelectPlan(e)}
              className="hidden"
              id="radio_1"
              type="radio"
              name="radio"
              value={yearly ? 90 : 9}
            />
            <label
              className="flex flex-col p-4 border border-gray-400 cursor-pointer rounded"
              htmlFor="radio_1"
            >
              <div className="flex items-center ">
                <img
                  className="w-10"
                  src="assets/images/icon-arcade.svg"
                  alt=""
                />
                <div className="ml-3">
                  <span className="font-semibold text-lg text-blue-800">
                    Arcade
                  </span>
                  <ul className="text-sm">
                    {!yearly && <li>$9/mo</li>}
                    {yearly && <li>$90/yr</li>}
                    {yearly && (
                      <li className="text-sm text-blue-800">2 months free</li>
                    )}
                  </ul>
                </div>
              </div>
            </label>
          </div>

          <div>
            <input
              onChange={(e) => handleSelectPlan(e)}
              className="hidden"
              id="radio_2"
              type="radio"
              name="radio"
              value={yearly ? 120 : 12}
            />
            <label
              className="flex flex-col p-4 border mt-3 border-gray-400 cursor-pointer rounded"
              htmlFor="radio_2"
            >
              <div className="flex items-center ">
                <img
                  className="w-10"
                  src="assets/images/icon-advanced.svg"
                  alt=""
                />
                <div className="ml-3">
                  <span className="font-semibold text-lg text-blue-800">
                    Advanced
                  </span>
                  <ul className="text-sm">
                    {!yearly && <li>$12/mo</li>}
                    {yearly && <li>$120/yr</li>}
                    {yearly && (
                      <li className="text-sm text-blue-800">2 months free</li>
                    )}
                  </ul>
                </div>
              </div>
            </label>
          </div>
          <div>
            <input
              onChange={(e) => handleSelectPlan(e)}
              className="hidden"
              id="radio_3"
              type="radio"
              name="radio"
              value={yearly ? 150 : 15}
            />
            <label
              className="flex flex-col p-4 border border-gray-400 mt-3 cursor-pointer rounded"
              htmlFor="radio_3"
            >
              <div className="flex items-center ">
                <img className="w-10" src="assets/images/icon-pro.svg" alt="" />
                <div className="ml-3">
                  <span className="font-semibold text-lg text-blue-800">
                    Pro
                  </span>
                  <ul className="text-sm">
                    {!yearly && <li>$15/mo</li>}
                    {yearly && <li>$150/yr</li>}
                    {yearly && (
                      <li className="text-sm text-blue-800">2 months free</li>
                    )}
                  </ul>
                </div>
              </div>
            </label>
          </div>
        </form>

        {/* TOGGLE BUTTON  */}
        <div className="mt-5 py-3 flex justify-center items-center bg-blue-50 rounded-md">
          <span
            className={`${
              yearly
                ? "font-semibold text-gray-400"
                : "text-blue-800 font-semibold"
            }`}
          >
            Monthly
          </span>
          <label className="mx-3 relative inline-flex items-center cursor-pointer">
            <input
              onChange={(e) => HandleChoose(e)}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span
            className={`${
              yearly
                ? "text-blue-800 font-semibold"
                : "font-semibold text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      <div className="w-10/12 flex items-center justify-between mx-auto px-3">
        <button className="font-bold text-gray-400">Go Back</button>
        <button onClick={() => dispatch(PriceOfPlan(PlanPrice))}>Test</button>
        <NextPagesButton />
      </div>
    </div>
  );
}
