import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  works: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload?.user;
      state.profile = action.payload?.user?.profile?.[0];
      state.theme = action.payload?.user?.theme;
      state.works = action.payload?.user?.work;
      state.token = action.payload?.token;
      state.exp = action.payload?.exp;
    },
    setWorks: (state, action) => {
      state.works = action.payload;
    },
  },
});

export const {
  setUser,
  setWorks,
} = globalSlice.actions;

export default globalSlice.reducer;
