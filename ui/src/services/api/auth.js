import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse(error) {
        return { failed: true }
      },
    }),
    getUserProfile: builder.query({
      query: () => `/me`,
    }),
  }),
})

export const { useGetUserProfileQuery, useLoginMutation } = authApi
