import { createSlice, configureStore } from "@reduxjs/toolkit";
const darkSlice = createSlice({
  name: "dark",
  initialState: {
    dark: "",
  },
  reducers: {
    setDark(state) {
      state.dark = "dark";
    },
    setWhite(state) {
      state.dark = "";
    },
    toggleMode(state) {
      state.dark === "dark" ? (state.dark = "") : (state.dark = "dark");
    },
  },
});
export const darkActions = darkSlice.actions;

const store = configureStore({ reducer: darkSlice.reducer });

export default store;
