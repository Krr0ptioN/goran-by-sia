import { isRejected } from '@reduxjs/toolkit'
import { authApi } from './api/auth'
import { loggedIn } from './user'

export const authMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (isRejected(action)) {
      if (action.payload.status === 401) {
        location = '/login'
        return
      }
    } else if (authApi.endpoints.login.matchFulfilled(action)) {
      dispatch(loggedIn(action.payload))
    }
    return next(action)
  }
