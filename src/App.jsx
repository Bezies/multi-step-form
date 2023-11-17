import React from "react";
import Header from "./Components/Header";
import Personalinfo from "./Components/Personalinfo";
import { useSelector, useDispatch } from "react-redux";
import SelectPlan from "./Components/SelectPlan";
import PickAddons from "./Components/PickAddons";
import Finishing from "./Components/Finishing";
import ThankYou from "./Components/ThankYou";

export default function App() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step);

  return (
    <div className="h-screen md:flex md:items-center">
      <Header />

      {step.steps[0].open && <Personalinfo />}

      {step.steps[1].open && <SelectPlan />}

      {step.steps[2].open && <PickAddons />}

      {step.steps[3].open && <Finishing />}

      {step.finish && <ThankYou />}
    </div>
  );
}
