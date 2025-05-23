import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  profile: null,
  token: null,
  theme: null,
  works: null,
  exp: null,
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
    logout: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("appState");
      localStorage.clear();
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setWorks: (state, action) => {
      state.works = action.payload;
    },
  },
});

export const {
  setUser,
  logout,
  setProfile,
  setTheme,
  setWorks,
} = globalSlice.actions;

export default globalSlice.reducer;
