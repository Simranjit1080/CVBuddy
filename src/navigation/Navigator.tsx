import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/Auth/authSelectors'
import { AppNavigator } from './AppNavigator'
import { AuthNavigator } from './AuthNavigator'

export const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
