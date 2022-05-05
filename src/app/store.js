import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//import storeReducer from './reducers/storeReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
