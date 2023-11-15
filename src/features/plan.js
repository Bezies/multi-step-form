import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: {
    name: "",
    value: "",
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
      state.step2Validation = true;
    },
    ChooseDuration: (state, action) => {
      state.yearly = action.payload;
    },
  },
});

export const { PriceOfPlan, ChooseDuration } = plan.actions;
export default plan.reducer;
