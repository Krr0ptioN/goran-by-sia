import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => `/me`,
    }),
  }),
})

export const { useGetUserProfileQuery } = authApi
