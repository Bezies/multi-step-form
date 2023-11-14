import { configureStore } from "@reduxjs/toolkit";
import personalValidation from "./features/personalValidation";
import step from "./features/step";
import plan from "./features/plan";

export const store = configureStore({
  reducer: {
    personalValidation,
    step,
    plan,
  },
});
