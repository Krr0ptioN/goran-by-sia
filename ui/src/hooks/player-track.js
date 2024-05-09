import { playToggled, trackMoved } from '@/services/player'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function usePlayerTrack() {
  const player = useSelector((state) => state.player)
  const dispatch = useDispatch()

  const move = useCallback((value) => dispatch(trackMoved(value)), [dispatch])
  const toggle = useCallback(() => dispatch(playToggled()), [dispatch])

  return {
    active: !!player.current.media,
    playing: player.playing,
    size: player.size,
    value: player.track,
    move,
    toggle,
  }
}
