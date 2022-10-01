import { createSlice } from '@reduxjs/toolkit'
import { ApiStatus } from '../../constants'

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  authData: null,
  authDataStatus: ApiStatus.idle,
  authDataError: null,
  registrationData: null,
  registrationDataStatus: ApiStatus.idle,
  registrationDataError: null,
}

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    getAuthData: (state, _action) => {
      state.authDataStatus = ApiStatus.loading
    },
    getAuthDataSuccess: (state, action) => {
      state.authDataStatus = ApiStatus.success
      state.authData = action.payload
    },
    getAuthDataFailed: (state, action) => {
      state.authDataStatus = ApiStatus.failed
      state.authDataError = action.payload
    },
    getRegistrationData: (state, _action) => {
      state.registrationDataStatus = ApiStatus.loading
    },
    getRegistrationDataSuccess: (state, action) => {
      state.registrationDataStatus = ApiStatus.success
      state.registrationData = action.payload
    },
    getRegistrationDataFailed: (state, action) => {
      state.registrationDataStatus = ApiStatus.failed
      state.registrationDataError = action.payload
    },
    signIn: (state, action) => {
      state.email = action.payload.email
      state.isLoggedIn = action.payload.isLoggedIn
      state.userName = action.payload.userName
    },
    signOut: (state) => {
      state.email = initialState.email
      state.userName = initialState.userName
      state.isLoggedIn = initialState.isLoggedIn
    },
    clearAuthData: (state) => {
      state.authData = initialState.authData
      state.authDataStatus = initialState.authDataStatus
      state.authDataError = initialState.authDataError
    },
    clearRegistrationData: (state) => {
      state.registrationData = initialState.registrationData
      state.registrationDataStatus = initialState.registrationDataStatus
      state.registrationDataError = initialState.registrationDataError
    },
  },
})

export const {
  signIn,
  signOut,
  getAuthData,
  getAuthDataFailed,
  getAuthDataSuccess,
  getRegistrationData,
  getRegistrationDataFailed,
  getRegistrationDataSuccess,
  clearAuthData,
  clearRegistrationData,
} = authSlice.actions

export default authSlice.reducer
