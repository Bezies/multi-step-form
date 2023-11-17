import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: [
    { id: 1, step: "step1", name: "Your info", open: true },
    { id: 2, step: "step2", name: "select plan", open: false },
    { id: 3, step: "step3", name: "add-ons", open: false },
    { id: 4, step: "step4", name: "summary", open: false },
  ],
  finish: false,
};

export const step = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, action) => {
      state.steps.find((el) => el.step === action.payload.actual).open = false;
      state.steps.find((el) => el.step === action.payload.next).open = true;
    },
    finalStep: (state, action) => {
      state.steps.find((el) => el.step === action.payload.actual).open = false;
      state.finish = true;
    },
    previousStep: (state, action) => {
      state.steps.find((el) => el.step === action.payload.actual).open = false;
      state.steps.find((el) => el.step === action.payload.previous).open = true;
    },
  },
});

export const { changeStep, finalStep, previousStep } = step.actions;
export default step.reducer;
