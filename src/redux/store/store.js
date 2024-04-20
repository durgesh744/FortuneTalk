import appReducer from '../reducer/root';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: appReducer,
});


export default store;



