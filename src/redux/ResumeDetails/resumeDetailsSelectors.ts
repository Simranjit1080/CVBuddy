import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const resumeDetailsSelector = (state: RootState) => state.resumeDetails

export const selectFullName = createSelector(
  resumeDetailsSelector,
  (subState) => subState.fullName,
)

export const selectEmail = createSelector(
  resumeDetailsSelector,
  (subState) => subState.email,
)
export const selectPhone = createSelector(
  resumeDetailsSelector,
  (subState) => subState.phone,
)

export const selectBio = createSelector(
  resumeDetailsSelector,
  (subState) => subState.bio,
)
export const selectUniversity = createSelector(
  resumeDetailsSelector,
  (subState) => subState.university,
)
export const selectFieldOfStudy = createSelector(
  resumeDetailsSelector,
  (subState) => subState.fieldOfStudy,
)
export const selectGradStartDate = createSelector(
  resumeDetailsSelector,
  (subState) => subState.gradStartDate,
)
export const selectGradEndDate = createSelector(
  resumeDetailsSelector,
  (subState) => subState.gradEndDate,
)
export const selectJobTitle = createSelector(
  resumeDetailsSelector,
  (subState) => subState.jobTitle,
)
export const selectEmployer = createSelector(
  resumeDetailsSelector,
  (subState) => subState.employer,
)
export const selectJobStartDate = createSelector(
  resumeDetailsSelector,
  (subState) => subState.jobStartDate,
)
export const selectJobEndDate = createSelector(
  resumeDetailsSelector,
  (subState) => subState.jobEndDate,
)
export const selectCity = createSelector(
  resumeDetailsSelector,
  (subState) => subState.city,
)
export const selectSkillName = createSelector(
  resumeDetailsSelector,
  (subState) => subState.skillName,
)
export const selectProficiency = createSelector(
  resumeDetailsSelector,
  (subState) => subState.proficiency,
)
export const selectAddResumeStatus = createSelector(
  resumeDetailsSelector,
  (subState) => subState.addResumeStatus,
)
export const selectAddResumeData = createSelector(
  resumeDetailsSelector,
  (subState) => subState.addResumeData,
)
export const selectAddResumeError = createSelector(
  resumeDetailsSelector,
  (subState) => subState.addResumeError,
)
