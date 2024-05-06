const { createSlice } = require('@reduxjs/toolkit')

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: {},
    playing: false,
    track: 0,
    size: 0,
    volume: 80,
    muted: false,
  },

  reducers: {
    mediaSizeChanged(state, action) {
      state.size = action.payload
    },
    muteToggled(state) {
      state.muted = !state.muted
    },
    volumedChanged(state, action) {
      state.volume = action.payload
      state.muted = state.volume < 1
    },
    currentChanged(state, action) {
      state.current = action.payload
      state.track = 0
      state.playing = true
    },
    playToggled(state) {
      state.playing = !state.playing
    },
    trackMoved(state, action) {
      state.track = Math.min(state.size, action.payload)
    },
    timeUpdated(state, action) {
      state.track = Math.min(state.size, action.payload)
    },
    paused(state) {
      state.playing = false
    },
    played(state) {
      state.playing = true
    },
  },
})

export const {
  muteToggled,
  volumedChanged,
  currentChanged,
  playToggled,
  timeUpdated,
  trackMoved,
  mediaSizeChanged,
  paused,
  played,
} = playerSlice.actions
