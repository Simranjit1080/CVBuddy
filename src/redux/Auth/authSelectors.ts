import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const authSelector = (state: RootState) => state.userAuth

export const selectSignUpStatus = createSelector(
  authSelector,
  (subState) => subState.signUpStatus,
)
export const selectSignUpData = createSelector(
  authSelector,
  (subState) => subState.signUpData,
)
export const selectSignUpError = createSelector(
  authSelector,
  (subState) => subState.signUpError,
)
export const selectSignInStatus = createSelector(
  authSelector,
  (subState) => subState.signInStatus,
)
export const selectSignInData = createSelector(
  authSelector,
  (subState) => subState.signInData,
)
export const selectSignInError = createSelector(
  authSelector,
  (subState) => subState.signInError,
)
export const selectIsLoggedIn = createSelector(
  authSelector,
  (subState) => subState.isLoggedIn,
)
export const selectToken = createSelector(
  authSelector,
  (subState) => subState.token,
)
