import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/playlists' }),
  endpoints: (builder) => ({
    getPlaylists: builder.query({ query: () => '/' }),
    getPlaylist: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
})

export const { useGetPlaylistQuery, useGetPlaylistsQuery } = playlistApi
