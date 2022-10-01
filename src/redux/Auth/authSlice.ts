import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpStatus: 'idle',
  signUpError: null,
  signUpData: null,
  signInStatus: 'idle',
  signInError: null,
  signInData: null,
  isLoggedIn: false,
  token: '',
}

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    signUp: (state, _action) => {
      state.signUpStatus = 'Loading'
    },
    signUpSuccess: (state, action) => {
      state.signUpStatus = 'Success'
      state.signUpData = action.payload
    },
    signUpFailed: (state, action) => {
      state.signUpStatus = 'Failed'
      state.signUpError = action.payload
    },
    signIn: (state, _action) => {
      state.signInStatus = 'Loading'
    },
    signInSuccess: (state, action) => {
      state.signInStatus = 'Success'
      state.signInData = action.payload
    },
    signInFailed: (state, action) => {
      state.signInStatus = 'Failed'
      state.signInError = action.payload
    },
    setIsLogged: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const {
  signUp,
  signUpFailed,
  signUpSuccess,
  setIsLogged,
  signIn,
  signInFailed,
  signInSuccess,
  setToken,
} = authSlice.actions

export default authSlice.reducer
