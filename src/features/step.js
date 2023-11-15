import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1: true,
  step2: false,
  step3: false,
  step4: false,
  finish: false,
  steps: [1, 2, 3, 4],
};

export const step = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, action) => {
      state.step1 = false;
      state.step2 = true;
    },
    changeStep2: (state, action) => {
      state.step2 = false;
      state.step3 = true;
    },
    changeStep3: (state, action) => {
      state.step3 = false;
      state.step4 = true;
    },
    changeStep4: (state, action) => {
      state.step4 = false;
      state.finish = true;
    },
  },
});

export const { changeStep, changeStep2, changeStep3, changeStep4 } =
  step.actions;
export default step.reducer;
