import { createSlice } from "@reduxjs/toolkit";

const userInfoSLice = createSlice({
  name: "user",
  initialState: {
    userInfo: [],
    filteredInfo: [],
    city: "",
    gender: "",
  },
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = [...state.userInfo, ...action.payload];
      // state.userInfo = action.payload;
    },
    filteredUserInfo: (state, action) => {
      state.filteredInfo = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setGenderValue: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { addUserInfo, filteredUserInfo, setCity, setGenderValue } =
  userInfoSLice.actions;

export default userInfoSLice.reducer;
