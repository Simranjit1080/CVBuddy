import { fork } from 'redux-saga/effects'
import resumeDetailsSaga from './ResumeDetails/resumeDetailsSaga'
import authSaga from './Auth/authSaga'

export default function* rootSaga() {
  yield fork(resumeDetailsSaga)
  yield fork(authSaga)
}
