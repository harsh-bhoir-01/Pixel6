import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserInfoSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
