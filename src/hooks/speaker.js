import { muteToggled, volumedChanged } from '@/services/player'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function useSpeaker() {
  const { muted, volume } = useSelector((state) => state.player)
  const dispatch = useDispatch()
  const toggle = useCallback(() => dispatch(muteToggled()), [dispatch])
  const change = useCallback(
    (value) => dispatch(volumedChanged(value)),
    [dispatch]
  )

  return {
    muted,
    volume,

    toggle,
    change,
  }
}
