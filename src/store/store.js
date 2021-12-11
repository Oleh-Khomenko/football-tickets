import { configureStore } from '@reduxjs/toolkit';

// slices
import clientReducer from './client';

export const store = configureStore({
  reducer: clientReducer,
});
