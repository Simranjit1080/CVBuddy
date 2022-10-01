import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  bio: '',
  university: '',
  fieldOfStudy: '',
  gradStartDate: '',
  gradEndDate: '',
  jobTitle: '',
  employer: '',
  jobStartDate: '',
  jobEndDate: '',
  city: '',
  skillName: '',
  proficiency: '',
}

const authDetailsSlice = createSlice({
  name: 'authDetails',
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setBio: (state, action) => {
      state.bio = action.payload
    },
    setUniversity: (state, action) => {
      state.university = action.payload
    },
    setFieldOfStudy: (state, action) => {
      state.fieldOfStudy = action.payload
    },
    setGradStartDate: (state, action) => {
      state.gradStartDate = action.payload
    },
    setGradEndDate: (state, action) => {
      state.gradEndDate = action.payload
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload
    },
    setEmployer: (state, action) => {
      state.employer = action.payload
    },
    setJobStartDate: (state, action) => {
      state.jobStartDate = action.payload
    },
    setJobEndDate: (state, action) => {
      state.jobEndDate = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    },
    setSkillName: (state, action) => {
      state.skillName = action.payload
    },
    setProficiency: (state, action) => {
      state.proficiency = action.payload
    },
  },
})

export const {
  setBio,
  setEmail,
  setEmployer,
  setFieldOfStudy,
  setFullName,
  setGradEndDate,
  setGradStartDate,
  setJobEndDate,
  setJobStartDate,
  setJobTitle,
  setPhone,
  setProficiency,
  setSkillName,
  setUniversity,
  setCity,
} = authDetailsSlice.actions

export default authDetailsSlice.reducer
