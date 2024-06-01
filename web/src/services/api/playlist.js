import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const prepareHeaders = (headers, { getState }) => {
  const token = getState().user.token
  console.log('test')
  headers.set('Authoriztion', `Bearer ${token}`)
  return headers
}

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/playlists', prepareHeaders }),
  endpoints: (builder) => ({
    getPlaylists: builder.query({ query: () => '/' }),
    getPlaylist: builder.query({
      query: (name) => `/${name}`,
    }),
  }),
})

export const { useGetPlaylistQuery, useGetPlaylistsQuery } = playlistApi
