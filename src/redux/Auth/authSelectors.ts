import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';

const authSelector = (state: RootState) => state.userAuth;

export const selectIsLoggedIn = createSelector(
  authSelector,
  subState => subState.isLoggedIn,
);
export const selectEmail = createSelector(
  authSelector,
  subState => subState.email,
);
export const selectUserName = createSelector(
  authSelector,
  subState => subState.userName,
);
export const selectAuthData = createSelector(
  authSelector,
  subState => subState.authData,
);
export const selectAuthDataError = createSelector(
  authSelector,
  subState => subState.authDataError,
);
export const selectAuthDataStatus = createSelector(
  authSelector,
  subState => subState.authDataStatus,
);
export const selectRegistrationData = createSelector(
  authSelector,
  subState => subState.registrationData,
);
export const selectRegistrationDataError = createSelector(
  authSelector,
  subState => subState.registrationDataError,
);
export const selectRegistrationDataStatus = createSelector(
  authSelector,
  subState => subState.registrationDataStatus,
);
