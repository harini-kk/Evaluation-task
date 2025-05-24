import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './globalSlice';

const loadState = () => {
  if (typeof window !== "undefined") {
    const savedState = localStorage.getItem("appState");
    return savedState ? { app: JSON.parse(savedState) } : undefined;
  }
  return undefined;
};

const store = configureStore({
  reducer: {
    app: globalReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem("appState", JSON.stringify(store.getState().app));
  }
});

export default store;
