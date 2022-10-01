import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { AppRoute } from './src/navigation/Navigator'

export default function App() {
  let persistor = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoute isLoggedIn={true} />
        </PersistGate>
      </Provider>
    </>
  )
}
