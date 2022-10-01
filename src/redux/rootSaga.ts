import { fork } from 'redux-saga/effects'
import authSaga from './Auth/authSaga'

export default function* rootSaga() {
  yield fork(authSaga)
}
