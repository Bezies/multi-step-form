import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PriceOfPlan, ChooseDuration } from "../features/plan";
import { changeStep, previousStep } from "../features/step";
import "./selectplan.css";

export default function SelectPlan() {
  const [yearly, setYearly] = useState(false);
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const step = useSelector((state) => state.step);

  const listOfPlan = [
    {
      id: 1,
      name: "Arcade",
      logo: "assets/images/icon-arcade.svg",
      month: 9,
      year: 90,
    },
    {
      id: 2,
      name: "Advanced",
      logo: "assets/images/icon-advanced.svg",
      month: 12,
      year: 120,
    },
    {
      id: 3,
      name: "Pro",
      logo: "assets/images/icon-pro.svg",
      month: 15,
      year: 150,
    },
  ];

  // CHOICE MONTH / YEAR
  function HandleChoose(e) {
    if (e.target.checked) {
      dispatch(ChooseDuration(true));
    } else {
      dispatch(ChooseDuration(false));
    }
  }

  // ADD PRICE
  const [PlanPrice, setPlanPrice] = useState("");
  const [NameOfPlan, setNameOfPlan] = useState("");

  function handleSelectPlan(e) {
    if (e.target.checked) {
      setPlanPrice(e.target.value);
      setNameOfPlan(e.target.id);
    }
  }

  // NEXT PAGE
  useEffect(() => {
    if (plan.step2Validation) {
      dispatch(changeStep({ actual: "step2", next: "step3" }));
    }
  }, [plan.step2Validation]);

  return (
    <div className="h-1/2 bg-blue-100 md:h-full md:w-full md:bg-white md:mt-20">
      <div className="bg-white w-10/12 rounded-md mx-auto py-5 px-3 md:flex md:flex-col md:justify-center md:w-1/2">
        <h1 className="text-2xl text-blue-800 font-bold md:text-4xl">
          Select your plan
        </h1>
        <p className="text-gray-500 mt-3 md:text-xl">
          You have the option of monthly or yearly billing
        </p>

        <form className="mt-4 md:flex md:justify-between">
          {listOfPlan.map((el) => (
            <div key={el.id}>
              <input
                onChange={(e) => handleSelectPlan(e)}
                className="hidden "
                id={el.name}
                type="radio"
                name="radio"
                value={plan.yearly ? el.year : el.month}
              />
              <label
                className="flex flex-col p-4 border mt-3 border-gray-400 cursor-pointer rounded md:justify-start md:w-40 md:py-8"
                htmlFor={el.name}
              >
                <div className="flex items-center md:flex-col md:items-start">
                  <img
                    className="w-10"
                    src={el.logo}
                    alt={`logo of ${el.name}`}
                  />
                  <div className="ml-3 md:ml-0 md:mt-8">
                    <span className="font-semibold text-lg text-blue-800">
                      {el.name}
                    </span>
                    <ul className="text-sm">
                      {!plan.yearly && <li>${el.month}/mo</li>}
                      {plan.yearly && <li>${el.year}/yr</li>}
                      {plan.yearly && (
                        <li className="text-sm text-blue-800">2 months free</li>
                      )}
                    </ul>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </form>

        {/* TOGGLE BUTTON  */}
        <div className="mt-5 py-3 flex justify-center items-center bg-blue-50 rounded-md md:w-full">
          <span
            className={`${
              plan.yearly
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
              plan.yearly
                ? "text-blue-800 font-semibold"
                : "font-semibold text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      {/*PREVIOUS NEXT / BUTTON  */}
      <div className="w-10/12 flex items-center justify-between mx-auto px-3 md:w-1/2">
        <button
          onClick={() =>
            dispatch(previousStep({ actual: "step2", previous: "step1" }))
          }
          className="font-bold text-gray-400"
        >
          Go Back
        </button>
        <button
          className="bg-blue-900 text-white rounded px-4 py-2"
          onClick={() =>
            dispatch(PriceOfPlan({ name: NameOfPlan, value: PlanPrice }))
          }
        >
          Next page
        </button>
      </div>
    </div>
  );
}
