import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getPlaylists: builder.query({
      query: () => `/playlists/`,
    }),
    getPlaylist: builder.query({
      query: (name) => `/playlists/${name}`,
    }),
  }),
})

export const { useGetPlaylistQuery, useGetPlaylistsQuery } = playlistApi
