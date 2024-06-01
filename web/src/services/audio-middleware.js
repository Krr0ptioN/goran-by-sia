import {
  currentChanged,
  mediaSizeChanged,
  muteToggled,
  paused,
  played,
  playToggled,
  timeUpdated,
  trackMoved,
  volumedChanged,
} from './player'

const audio = new Audio()

export const audioMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const { player } = getState()

    if (currentChanged.match(action)) {
      audio.src = action.payload.media
      audio.volume / 100
      audio.onloadedmetadata = (e) => {
        if (player.size != e.target.duration) {
          dispatch(mediaSizeChanged(e.target.duration))
        }
      }
      audio.onpause = () => dispatch(paused())
      audio.onplay = () => dispatch(played())
      audio.ontimeupdate = () => dispatch(timeUpdated(audio.currentTime))
      audio.play()
    }

    if (muteToggled.match(action)) {
      audio.muted = !player.muted
    }

    if (volumedChanged.match(action)) {
      audio.volume = action.payload / 100
    }

    if (playToggled.match(action)) {
      if (player.playing) audio.pause()
      else audio.play()
    }

    if (trackMoved.match(action)) {
      audio.currentTime = action.payload
    }

    return next(action)
  }
