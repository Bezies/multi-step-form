import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: {
    validation: false,
    error: false,
  },
  mail: {
    validation: false,
    error: false,
    invalid: false,
  },
  phone: {
    validation: false,
    error: false,
    invalid: false,
  },
  step1Validation: true,
};

export const personalValidation = createSlice({
  name: "personalValidation",
  initialState,
  reducers: {
    Validation: (state, action) => {
      // NAME VALIDATION
      state.name.error = false;
      if (action.payload.name === "") {
        state.name.error = true;
      } else {
        state.name.validation = true;
      }

      // MAIL VALIDATION
      const regExMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      state.mail.error = false;
      state.mail.invalid = false;
      if (action.payload.mail === "") {
        state.mail.error = true;
      } else if (!regExMail.test(action.payload.mail)) {
        state.mail.error = false;
        state.mail.invalid = true;
      } else {
        state.mail.validation = true;
      }

      // PHONE VALIDATION
      const regExPhone = /^[\+]?[(]?[0-9]{10}$/i;
      state.phone.error = false;
      state.phone.invalid = false;
      if (action.payload.phone === "") {
        state.phone.error = true;
      } else if (!regExPhone.test(action.payload.phone)) {
        state.phone.error = false;
        state.phone.invalid = true;
      } else {
        state.phone.validation = true;
      }

      // STEP VALIDATION
      if (
        state.name.validation &&
        state.mail.validation &&
        state.phone.validation
      ) {
        state.step1Validation = true;
      }
    },
  },
});

export const { Validation } = personalValidation.actions;
export default personalValidation.reducer;
