import { currentChanged } from '@/services/player'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export default function SongItem({ id, artist, title, albumArt, media, size }) {
  const dispatch = useDispatch()
  const changeSong = useCallback(() => {
    dispatch(
      currentChanged({
        id,
        artist,
        title,
        albumArt,
        media,
        size,
      })
    )
  }, [dispatch])
  return (
    <li onClick={changeSong}>
      <img src={albumArt} />
      <h1>{title}</h1>
      <span>{artist}</span>
    </li>
  )
}
