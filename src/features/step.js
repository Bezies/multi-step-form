import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1: false,
  step2: true,
  step3: false,
  step4: false,
};

export const step = createSlice({
  name: "step",
  initialState,
  reducers: {},
});

export const {} = step.actions;
export default step.reducer;
