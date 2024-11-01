import { configureStore } from '@reduxjs/toolkit';
import formReducer from './sample/sampleSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    // other slices if you have any
  },
});

export default store;
