import { useSelector } from 'react-redux'

export default function useCurrentPlaying() {
  return useSelector((state) => state.player.current)
}
