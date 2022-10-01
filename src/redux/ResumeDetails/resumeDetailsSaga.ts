import { takeLatest, put } from 'redux-saga/effects'
import { addResumeApi } from '../../API'
import { showErrorToast } from '../../utils/helperFunctions'
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
    if (response.data.status) {
      yield put(addResumeSuccess(response.data))
    } else {
      showErrorToast(response.data.message)
      yield put(addResumeFailed(response.data.message))
    }
  } catch (error: any) {
    showErrorToast(error.response.data)
    yield put(addResumeFailed(error.response.data))
  }
}

export default function* ResumeDetailsSaga() {
  yield takeLatest(addResume.type, addResumeSaga)
}
