import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStep4 } from "../features/step";

export default function Finishing() {
  const plan = useSelector((state) => state.plan);
  const addons = useSelector((state) => state.addons);

  const totalBill = parseInt(plan.plan.value) + addons.totalPrice;
  const dispatch = useDispatch();

  return (
    <div className="h-1/2 bg-blue-100">
      <div className="bg-white w-10/12 rounded-md mx-auto py-5 px-3">
        <h1 className="text-2xl text-blue-800 font-bold">Finishing up</h1>
        <p className="text-gray-500 mt-3">
          Double-check everything looks OK before confirming.
        </p>
        <div className="flex justify-between items-center bg-blue-50 mx-auto rounded-md py-2 px-2 mt-4 border-b border-gray-400">
          <div>
            <p className="text-blue-800 font-medium">
              {plan.plan.name} {plan.yearly ? "(Yearly)" : "(Monthly)"}
            </p>
            <button className="text-gray-400 font-medium underline">
              Change
            </button>
          </div>
          <span className="text-blue-800 font-medium">
            {plan.yearly && <p>+${plan.plan.value}/yr</p>}
            {!plan.yearly && <p>+${plan.plan.value}/mo</p>}
          </span>
        </div>
        <div>
          <ul className="mt-3">
            {addons.AddOnsChoice.length > 0 &&
              addons.AddOnsChoice.map((el, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mt-2 px-2"
                >
                  <p className="text-gray-400">{el.name}</p>
                  <span className="text-blue-800 font-medium">
                    +${el.value}/mo
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex justify-between items-center mt-10 px-2">
          <p className="text-gray-400">
            Total (per {plan.yearly ? "year" : "month"})
          </p>
          <span className="text-blue-600 font-medium">
            {plan.yearly && <p>+${totalBill}/yr</p>}
            {!plan.yearly && <p>+${totalBill}/mo</p>}
          </span>
        </div>
      </div>
      <div className="w-10/12 flex items-center justify-between mx-auto mt-20 px-3">
        <button className="font-bold text-gray-400">Go Back</button>
        <button
          onClick={() => dispatch(changeStep4())}
          className="bg-blue-900 text-white rounded px-4 py-2"
        >
          Next page
        </button>
      </div>
    </div>
  );
}
