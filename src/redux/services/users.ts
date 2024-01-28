import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Search } from "../../interfaces/interfaces";

export const searchUsersApi = createApi({
    reducerPath: 'seacrhUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com'
    }),
    endpoints: (build) => ({
        getUsers: build.query<Search, {login: string, order: string}>({
            query: (args) => ({
                url: `/search/users?q=${args.login}&sort=repositories&order=${args.order}`,
                method: 'GET',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                    "Accept": "application/vnd.github.v3+json",
                }
            })
        })
    })
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = searchUsersApi

// order is either desc or asc