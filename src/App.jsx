import React from "react";
import Header from "./Components/Header";
import Personalinfo from "./Components/Personalinfo";
import { useSelector, useDispatch } from "react-redux";
import SelectPlan from "./Components/SelectPlan";

export default function App() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step);

  return (
    <div className="h-screen">
      <Header />

      {step.step1 && <Personalinfo />}

      {step.step2 && <SelectPlan />}
    </div>
  );
}
