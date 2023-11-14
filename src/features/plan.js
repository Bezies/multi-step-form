import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const plan = createSlice({
  name: "plan",
  initialState,
  reducers: {
    PriceOfPlan: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { PriceOfPlan } = plan.actions;
export default plan.reducer;
