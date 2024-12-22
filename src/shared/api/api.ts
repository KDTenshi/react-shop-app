import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DisplayCaseType, Item } from "../types/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Item[], DisplayCaseType | void>({
      query: (type) => (type ? type : ""),
    }),
    getBanners: builder.query<string[], void>({
      query: () => "banners",
    }),
  }),
});

export const { useGetProductsQuery, useGetBannersQuery } = api;
