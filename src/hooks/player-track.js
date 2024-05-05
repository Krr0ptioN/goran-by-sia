import { trackMoved } from '@/services/player'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function usePlayerTrack() {
  const player = useSelector((state) => state.player)
  const dispatch = useDispatch()

  const move = useCallback((value) => dispatch(trackMoved(value)), [dispatch])
  return {
    size: player.current?.size,
    value: player.track,
    move,
  }
}
