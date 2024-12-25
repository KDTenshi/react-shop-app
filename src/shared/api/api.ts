import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItemsGroupType, Item } from "../types/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Item[], ItemsGroupType | void>({
      query: (type) => (type ? type : ""),
    }),
    getBanners: builder.query<string[], void>({
      query: () => "banners",
    }),
    getPageBanners: builder.query<{ [key in ItemsGroupType]: { title: string; image: string } }, void>({
      query: () => "pageBanners",
    }),
    getBigBanner: builder.query<{ image: string }, void>({
      query: () => "bigBanner",
    }),
  }),
});

export const { useGetProductsQuery, useGetBannersQuery, useGetPageBannersQuery, useGetBigBannerQuery } = api;
