import { createSlice } from "@reduxjs/toolkit";
import { createStockData } from "../utils/dateManupilation";

export const stockDataSlice = createSlice({
  name: "data",
  initialState: {
    value: createStockData(0),
  },
  reducers: {
    generateStockData: (state, action) => {
      state.value = createStockData(action.payload);
    },
  },
});

export const { generateStockData } = stockDataSlice.actions;
export const selectData = (state) => state.data.value;

export default stockDataSlice.reducer;
