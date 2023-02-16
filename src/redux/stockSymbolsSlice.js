import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stockSymbolsApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dumbstockapi.com/stock?countries=CA,US&ticker_search=AA",
  }),
  endpoints: (builder) => ({
    getStockSymbols: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetStockSymbolsQuery } = stockSymbolsApi;
