import { fork } from 'redux-saga/effects'
// import aboutStockDataSaga from './AboutStockData/aboutStockDataSaga'
// import allStocksDataSaga from './AllStockData/allStocksDataSaga'
// import stockCandleDetailSaga from './StockCandleDetail/stockCandleDetailSaga'
// import stockGraphDetailSaga from './StockGraphDetail/stockGraphDetailSaga'
// import wishlistSaga from './Wishlist/wishlistSaga'
import authSaga from './Auth/authSaga'
// import completedOrdersSaga from './CompletedOrders/completedOrdersSaga'
// import pendingOrdersSaga from './PendingOrders/pendingOrdersSaga'
// import holdingsSaga from './Holdings/holdingsSaga'
// import executeSaga from './executeOrder/executeOrderSaga'
// import userProfileSaga from './UserProfile/userProfileSaga'
// import walletSaga from './Wallet/walletSaga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield fork(authSaga)
  // yield fork(allStocksDataSaga)
  // yield fork(aboutStockDataSaga)
  // yield fork(stockCandleDetailSaga)
  // yield fork(stockGraphDetailSaga)
  // yield fork(wishlistSaga)
  // yield fork(completedOrdersSaga)
  // yield fork(pendingOrdersSaga)
  // yield fork(holdingsSaga)
  // yield fork(executeSaga)
  // yield fork(userProfileSaga)
  // yield fork(walletSaga)
}
