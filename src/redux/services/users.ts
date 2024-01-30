import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Search } from "../../interfaces/interfaces";

export const searchUsersApi = createApi({
  reducerPath: 'seacrhUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  endpoints: (build) => ({
    getUsers: build.query<
      Search,
      { login: string; order: string; per_page: number; page: number }
    >({
      query: (args) => ({
        url: `/search/users?q=${args.login}&per_page=${args.per_page}&page=${args.page}&sort=repositories&order=${args.order}`,
        method: 'GET',
        headers: {
          'accept': 'application/vnd.github+json',
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = searchUsersApi;