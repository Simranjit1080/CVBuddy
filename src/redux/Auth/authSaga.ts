import { takeLatest, put } from 'redux-saga/effects'
import { signUpApi } from '../../API'
import { signInApi } from '../../API/Auth'
import { storeData } from '../../utils/helperFunctions'
import {
  signUp,
  signUpFailed,
  signUpSuccess,
  setIsLogged,
  signIn,
  signInSuccess,
  signInFailed,
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
    if (response.status) {
      yield put(signUpSuccess(response.data))
      yield storeData('token', response.data.token)
      yield put(setIsLogged(true))
    }
  } catch (error: any) {
    yield put(signUpFailed(error.response.data))
  }
}

export function* signInSaga(action: SignInAction): Generator {
  console.log(action.payload)
  try {
    const response: any = yield signInApi(action.payload)
    if (response.status) {
      yield put(signInSuccess(response.data))
      yield storeData('token', response.data.token)
      yield put(setIsLogged(true))
    }
  } catch (error: any) {
    console.log({ error })

    yield put(signInFailed(error.response.data))
  }
}

export default function* authSaga() {
  yield takeLatest(signUp.type, signUpSaga)
  yield takeLatest(signIn.type, signInSaga)
}
