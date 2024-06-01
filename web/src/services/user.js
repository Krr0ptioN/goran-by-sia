const { createSlice } = require('@reduxjs/toolkit')

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token'),
    user: {},
  },

  reducers: {
    loggedIn(state, action) {
      const { token, ...user } = action.payload
      localStorage.setItem('token', token)
      state.user = user
    },
  },
})

export const { loggedIn } = userSlice.actions
