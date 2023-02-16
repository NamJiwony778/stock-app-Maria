import { configureStore } from "@reduxjs/toolkit";
import { stockSymbolsApi } from "./stockSymbolsSlice";
import { soclialMediaCountSlice } from "./socialMediaCountSlice";
import { stockDataSlice } from "./stockDataSlice";
import { recommendationSlice } from "./recommendationSlice";

export const store = configureStore({
  reducer: {
    counter: soclialMediaCountSlice.reducer,
    data: stockDataSlice.reducer,
    recommendation: recommendationSlice.reducer,
    [stockSymbolsApi.reducerPath]: stockSymbolsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([stockSymbolsApi.middleware]),
});
