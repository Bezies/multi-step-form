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
      if (state.plan.name !== "") {
        state.step2Validation = true;
      }
    },
    ChooseDuration: (state, action) => {
      state.yearly = action.payload;
    },
  },
});

export const { PriceOfPlan, ChooseDuration, UnvalidStep2 } = plan.actions;
export default plan.reducer;
