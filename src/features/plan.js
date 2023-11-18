import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfPlan: [
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
  ],
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
      if (state.yearly) {
        state.plan.value = state.listOfPlan.find(
          (el) => el.name === action.payload
        ).year;
        state.step2Validation = true;
      } else {
        state.plan.value = state.listOfPlan.find(
          (el) => el.name === action.payload
        ).month;
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
