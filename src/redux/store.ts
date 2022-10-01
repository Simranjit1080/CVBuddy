import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import authReducer from './Auth/authSlice'
import resumeDetailsSlice from './ResumeDetails/resumeDetailsSlice'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [
    'signUpStatus',
    'signUpError',
    'signUpData',
    'signInStatus',
    'signInError',
    'signInData',
    'pdfData',
  ],
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    userAuth: persistedReducer,
    resumeDetails: resumeDetailsSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
