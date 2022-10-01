import { takeLatest, put } from 'redux-saga/effects'
import { signUpApi, signInApi } from '../../API'
import { exportPdfApi } from '../../API/Auth'
import { showErrorToast, showSuccessToast } from '../../utils/helperFunctions'

import {
  signUp,
  signUpFailed,
  signUpSuccess,
  setIsLogged,
  signIn,
  signInSuccess,
  signInFailed,
  setToken,
  exportPdfSuccess,
  exportPdfFailed,
  exportPdf,
} from './authSlice'

interface SignUpAction {
  payload: any
  type: string
}
interface SignInAction {
  payload: any
  type: string
}

export function* signUpSaga(action: SignUpAction): Generator {
  try {
    const response: any = yield signUpApi(action.payload)
    if (response.data.status) {
      yield put(signUpSuccess(response.data))
      yield put(setToken(response.data.data.token))
      yield put(setIsLogged(true))
    } else {
      showErrorToast(response.data.message)
      yield put(signInFailed(response.data.message))
    }
  } catch (error: any) {
    showErrorToast(error.response.message)
    yield put(signUpFailed(error.response.message))
  }
}

export function* signInSaga(action: SignInAction): Generator {
  try {
    const response: any = yield signInApi(action.payload)
    if (response.data.status) {
      yield put(signInSuccess(response.data))
      yield put(setToken(response.data.data.token))
      yield put(setIsLogged(true))
    } else {
      showErrorToast(response.data.message)
      yield put(signInFailed(response.data.message))
    }
  } catch (error: any) {
    showErrorToast(error.response.message)
    yield put(signInFailed(error.response.data))
  }
}

export function* exportPdfSaga(action: SignInAction): Generator {
  try {
    const response: any = yield exportPdfApi(action.payload)
    if (response.status) {
      yield put(exportPdfSuccess(response.data))
      showSuccessToast('Pdf emailed successfully')
    }
    yield put(exportPdfFailed(true))
  } catch (error: any) {
    yield put(signInFailed(error.response.data))
  }
}

export default function* authSaga() {
  yield takeLatest(signUp.type, signUpSaga)
  yield takeLatest(signIn.type, signInSaga)
  yield takeLatest(exportPdf.type, exportPdfSaga)
}
