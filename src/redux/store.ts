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
// import stockCandleDetailSlice from './StockCandleDetail/stockCandleDetailSlice'
// import stockGraphDetailSlice from './StockGraphDetail/stockGraphDetailSlice'
// import wishlistSlice from './Wishlist/wishlistSlice'
// import aboutStockDataSlice from './AboutStockData/aboutStockDataSlice'
// import allStocksDataSlice from './AllStockData/allStocksDataSlice'
// import userProfileSlice from './UserProfile/userProfileSlice'
// import pendingOrdersSlice from './PendingOrders/pendingOrdersSlice'
// import holdingsSlice from './Holdings/holdingsSlice'
// import completedOrdersSlice from './CompletedOrders/completedOrdersSlice'
// import executeOrderSlice from './executeOrder/executeOrderSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
// import walletSlice from './Wallet/walletSlice'
// import authDetailsSlice from './AuthDetails/authDetailsSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [
    'authData',
    'authDataStatus',
    'authDataError',
    'registrationData',
    'registrationDataStatus',
    'registrationDataError',
  ],
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    userAuth: persistedReducer,
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
