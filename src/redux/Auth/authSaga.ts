import { takeLatest, put } from 'redux-saga/effects'
import { getAuthDetails, getRegistrationDetails } from '../../API'
import {
  getAuthData,
  getAuthDataFailed,
  getAuthDataSuccess,
  getRegistrationData,
  getRegistrationDataFailed,
  getRegistrationDataSuccess,
  signOut,
} from './authSlice'

interface LoginAction {
  payload: {
    username: string
    password: string
  }
  type: string
}

interface RegistrationAction {
  payload: {
    name: string
    mobile: string
    email: string
    password: string
    username: string
  }
  type: string
}
export function* getAuthDataSaga(action: LoginAction): Generator {
  try {
    const response: any = yield getAuthDetails(action.payload)
    if (response.data.msg === 'Login successful') {
      yield put(getAuthDataSuccess(response.data))
    }
  } catch (error: any) {
    yield put(signOut())
    yield put(getAuthDataFailed(error.response.data))
  }
}
export function* getRegistrationDataSaga(
  action: RegistrationAction,
): Generator {
  try {
    const response: any = yield getRegistrationDetails(action.payload)
    if (response.data.msg === 'Registration successful') {
      yield put(getRegistrationDataSuccess(response.data))
    }
  } catch (error: any) {
    yield put(getRegistrationDataFailed(error.response.data))
  }
}

export default function* authSaga() {
  yield takeLatest(getAuthData.type, getAuthDataSaga)
  yield takeLatest(getRegistrationData.type, getRegistrationDataSaga)
}
