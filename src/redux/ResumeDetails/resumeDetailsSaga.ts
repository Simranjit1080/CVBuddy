import { takeLatest, put } from 'redux-saga/effects'
import { addResumeApi } from '../../API'
import {
  addResumeSuccess,
  addResumeFailed,
  addResume,
} from './resumeDetailsSlice'

interface AddResumeAction {
  payload: any
  type: string
}

export function* addResumeSaga(action: AddResumeAction): Generator {
  try {
    const response: any = yield addResumeApi(action.payload)
    if (response.status) {
      yield put(addResumeSuccess(response.data))
    }
  } catch (error: any) {
    yield put(addResumeFailed(error.response.data))
  }
}

export default function* ResumeDetailsSaga() {
  yield takeLatest(addResume.type, addResumeSaga)
}
