import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/api/auth'
import { playlistApi } from './services/api/playlist'
import { playerSlice } from './services/player'
import { audioMiddleware } from './services/audio-middleware'

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [playlistApi.reducerPath]: playlistApi.reducer,
  [playerSlice.reducerPath]: playerSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(playlistApi.middleware)
      .concat(audioMiddleware),
})

setupListeners(store.dispatch)