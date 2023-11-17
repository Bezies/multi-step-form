import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: {
    name: "",
    value: "",
    error: false,
  },
  yearly: false,
  step2Validation: false,
};

export const plan = createSlice({
  name: "plan",
  initialState,
  reducers: {
    PriceOfPlan: (state, action) => {
      state.plan.name = action.payload.name;
      state.plan.value = action.payload.value;
      if (state.plan.name !== "") {
        state.step2Validation = true;
      }
    },
    PlanError: (state, action) => {
      if (state.plan.name === "") {
        state.plan.error = true;
      } else {
        state.plan.error = false;
      }
    },
    ChooseDuration: (state, action) => {
      state.yearly = action.payload;
    },
    GoBackSelectPlan: (state, action) => {
      state.step2Validation = false;
    },
  },
});

export const { PriceOfPlan, ChooseDuration, GoBackSelectPlan, PlanError } =
  plan.actions;
export default plan.reducer;
