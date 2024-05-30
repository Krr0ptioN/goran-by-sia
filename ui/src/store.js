import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/api/auth'
import { playlistApi } from './services/api/playlist'
import { playerSlice } from './services/player'
import { audioMiddleware } from './services/audio-middleware'
import { authMiddleware } from './services/auth-middleware'
import { userSlice } from './services/user'

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [playlistApi.reducerPath]: playlistApi.reducer,
  [playerSlice.reducerPath]: playerSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(playlistApi.middleware)
      .concat(audioMiddleware)
      .concat(authMiddleware),
})

setupListeners(store.dispatch)
