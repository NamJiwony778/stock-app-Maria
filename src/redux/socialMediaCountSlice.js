import { createSlice } from "@reduxjs/toolkit";

export const soclialMediaCountSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    generateSocialCount: (state) => {
      state.value = Math.floor(Math.random() * 100);
    },
  },
});

export const { generateSocialCount } = soclialMediaCountSlice.actions;
export const selectCount = (state) => state.counter.value;

export default soclialMediaCountSlice.reducer;
