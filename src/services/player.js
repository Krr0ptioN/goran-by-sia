const { createSlice } = require('@reduxjs/toolkit')

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: {
      id: 'ab67616d00001e02ff9ca10b55ce82ae553c8228',
      artist: 'Gelawêj',
      title: 'Kotre Spî',
      albumArt:
        'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
      media:
        'http://localhost:3000/media/cae9729f-fc1c-4c74-bb8b-012edb4fb9da.mp3',
      size: 240,
    },
    playing: false,
    track: 150,
    volume: 80,
    muted: false,
  },

  reducers: {
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
      state.play = true
    },
    playToggled(state) {
      state.playing = !state.playing
    },
    trackMoved(state, action) {
      state.track = Math.min(state.current.size, action.payload)
    },
  },
})

export const {
  muteToggled,
  volumedChanged,
  currentChanged,
  playToggled,
  trackMoved,
} = playerSlice.actions
