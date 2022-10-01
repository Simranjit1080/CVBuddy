import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { AppRoute } from './src/navigation/Navigator'
import Toast from 'react-native-toast-message'

export default function App() {
  let persistor = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </Provider>
      <Toast position="bottom" />
    </>
  )
}
