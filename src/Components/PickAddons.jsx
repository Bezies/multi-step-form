import React, { useState, useEffect } from "react";
import { totalPriceOfAddons } from "../features/addons";
import { useDispatch, useSelector } from "react-redux";
import { changeStep, previousStep } from "../features/step";
import { GoBackSelectPlan } from "../features/plan";

export default function PickAddons() {
  const [addOnsTotal, setAddOnsTotal] = useState([]);
  const plan = useSelector((state) => state.plan);
  const addons = useSelector((state) => state.addons);
  const step = useSelector((state) => state.step);

  const dispatch = useDispatch();

  // ADD ADDONS
  function handleAddOns(e) {
    if (e.target.checked) {
      setAddOnsTotal([
        ...addOnsTotal,
        { name: e.target.name, value: e.target.value },
      ]);
    } else if (!e.target.checked) {
      const indexOfAddons = addOnsTotal.findIndex(
        (el) => el.name === e.target.name
      );
      addOnsTotal.splice(indexOfAddons, 1);
    }
  }

  // SUM OF ADD ONS PRICE
  function HandleSum() {
    const totalprice = addOnsTotal.reduce(
      (sum, item) => sum + parseInt(item.value),
      0
    );
    dispatch(
      totalPriceOfAddons({ addOnChoice: addOnsTotal, total: totalprice })
    );
  }

  // CHANGE PAGE
  useEffect(() => {
    if (addons.step3Validation) {
      dispatch(changeStep({ actual: "step3", next: "step4" }));
    }
  }, [addons.step3Validation]);

  function handlePrevious() {
    dispatch(GoBackSelectPlan());
    dispatch(previousStep({ actual: "step3", previous: "step2" }));
  }

  return (
    <div className="h-1/2 bg-blue-100 md:h-full md:w-full md:bg-white md:mt-20">
      <div className="bg-white w-10/12 rounded-md mx-auto py-5 px-3 md:flex md:flex-col md:justify-center md:w-1/2">
        <h1 className="text-2xl text-blue-800 font-bold md:text-4xl">
          Pick add-ons
        </h1>
        <p className="text-gray-500 mt-3 md:text-xl">
          Add-ons help enhance your gaming experience
        </p>

        <form className="mt-3">
          <label
            className="flex items-center justify-between border border-gray-400 rounded px-2 py-2 mt-3 md:py-4 md:px-5"
            htmlFor="checkbox_1"
          >
            <div className="md:flex md:items-center">
              <input
                type="checkbox"
                name="Online service"
                id="checkbox_1"
                value={plan.yearly ? 10 : 1}
                onChange={(e) => handleAddOns(e)}
              />
              <div className="md:ml-10">
                <p className="text-blue-800 font-semibold text-sm">
                  Online service
                </p>
                <span className="text-gray-400 text-xs">
                  Access to multiplayer games
                </span>
              </div>
            </div>

            <span className="text-blue-800 text-xs">
              {plan.yearly ? "+$10/mo" : "+$1/mo"}
            </span>
          </label>
          <label
            className="flex items-center justify-between border border-gray-400 rounded px-2 py-2 mt-3 md:py-4 md:px-5"
            htmlFor="checkbox_2"
          >
            <div className="md:flex md:items-center">
              <input
                type="checkbox"
                name="Larger storage"
                id="checkbox_2"
                value={plan.yearly ? 20 : 2}
                onChange={(e) => handleAddOns(e)}
              />
              <div className="md:ml-10">
                <p className="text-blue-800 font-semibold text-sm">
                  Larger storage
                </p>
                <span className="text-gray-400 text-xs">
                  Extra 1TB of cloud save
                </span>
              </div>
            </div>
            <span className="text-blue-800 text-xs">
              {plan.yearly ? "+$20/mo" : "+$2/mo"}
            </span>
          </label>

          <label
            className="flex items-center justify-between border border-gray-400 rounded px-2 py-2 mt-3 md:py-4 md:px-5"
            htmlFor="checkbox_3"
          >
            <div className="md:flex md:items-center">
              <input
                type="checkbox"
                name="Customizable profile"
                id="checkbox_3"
                value={plan.yearly ? 20 : 2}
                onChange={(e) => handleAddOns(e)}
              />
              <div className="md:ml-10">
                <p className="text-blue-800 font-semibold text-sm">
                  Customizable profile
                </p>
                <span className="text-gray-400 text-xs">
                  Custom theme on your profile
                </span>
              </div>
            </div>
            <span className="text-blue-800 text-xs">
              {plan.yearly ? "+$20/mo" : "+$2/mo"}
            </span>
          </label>
        </form>
      </div>
      <div className="w-10/12 flex items-center justify-between mx-auto mt-20 px-3 md:w-1/2">
        <button
          onClick={() => handlePrevious()}
          className="font-bold text-gray-400"
        >
          Go Back
        </button>
        <button
          onClick={() => HandleSum()}
          className="bg-blue-900 text-white rounded px-4 py-2"
        >
          Next page
        </button>
      </div>
    </div>
  );
}
