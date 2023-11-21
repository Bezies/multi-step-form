import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PriceOfPlan, ChooseDuration, PlanError } from "../features/plan";
import { changeStep, previousStep } from "../features/step";
import { GoBackPersonnalValidation } from "../features/personalValidation";
import "./selectplan.css";

export default function SelectPlan() {
  const [yearly, setYearly] = useState(false);
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const step = useSelector((state) => state.step);
  const personalValidation = useSelector((state) => state.personalValidation);

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

  // SELECTION DU PLAN POUR IDENTIFIER LE NOM
  function handleSelectPlan(e) {
    if (e.target.checked) {
      setNameOfPlan(e.target.id);
    }
  }

  // NEXT PAGE
  useEffect(() => {
    if (plan.step2Validation) {
      dispatch(changeStep({ actual: "step2", next: "step3" }));
    }
  }, [plan.step2Validation]);

  function handlePrevious() {
    dispatch(GoBackPersonnalValidation());
    dispatch(previousStep({ actual: "step2", previous: "step1" }));
  }

  // BUTTON NEXT PAGE : GESTION DU PRIX DU PLAN
  function handleNext() {
    dispatch(PriceOfPlan(NameOfPlan));
  }

  return (
    <div className="h-3/5 bg-blue-100 md:h-full md:w-full md:bg-white md:mt-20">
      <div className="relative -top-20 bg-white w-10/12 rounded-lg mx-auto py-5 px-3 md:flex md:top-0 md:flex-col md:justify-center md:w-1/2">
        <h1 className="text-2xl text-blue-800 font-bold md:text-4xl">
          Select your plan
        </h1>
        <p className="text-gray-500 mt-3 md:text-xl">
          You have the option of monthly or yearly billing
        </p>

        <form className="mt-4 md:flex md:justify-between">
          {plan.listOfPlan.map((el) => (
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

        {plan.plan.error && (
          <div className="mt-5 text-center">
            <span className="font-semibold text-lg text-red-600">
              Please select your plan before next step
            </span>
          </div>
        )}

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
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
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
      <div className="mt-10 w-10/12 flex items-center justify-between mx-auto px-3 md:w-1/2">
        <button
          onClick={() => handlePrevious()}
          className="font-bold text-gray-400"
        >
          Go Back
        </button>
        <button
          className="bg-blue-900 text-white rounded px-4 py-2"
          onClick={() => handleNext({ name: NameOfPlan })}
        >
          Next page
        </button>
      </div>
    </div>
  );
}
