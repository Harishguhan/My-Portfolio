import { configureStore } from "@reduxjs/toolkit";
import usersReducers from './userSlice'
export const store = configureStore({
  reducer: {
    userData:usersReducers,
  },
});
