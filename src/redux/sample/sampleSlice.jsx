// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fields: {
    name: '',
    email: '',
    password: '',
  },
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state.fields[field] = value;
    },
    setFieldError: (state, action) => {
      const { field, error } = action.payload;
      state.errors[field] = error;
    },
    clearFieldErrors: (state) => {
      state.errors = {};
    },
    resetForm: () => initialState, // Reset form fields and errors
  },
});

export const { setFieldValue, setFieldError, clearFieldErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;
