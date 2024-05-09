import React from 'react'
import './dashboard.scss'
import { useGetPlaylistsQuery } from '@/services/api/playlist'
import Playlist from '@/components/playlist'

export default function Dashbaord() {
  const { data } = useGetPlaylistsQuery()
  return (
    <div className="page dashboard-page">
      {data?.map((playlist) => (
        <Playlist key={playlist.name} {...playlist} />
      ))}
    </div>
  )
}
