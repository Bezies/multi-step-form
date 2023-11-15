import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AddOnsChoice: [],
  totalPrice: "",
  step3Validation: false,
};

export const addOns = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    totalPriceOfAddons: (state, action) => {
      state.step3Validation = true;
      state.totalPrice = action.payload.total;
      state.AddOnsChoice = [...action.payload.addOnChoice];
    },
  },
});

export const { totalPriceOfAddons } = addOns.actions;
export default addOns.reducer;
