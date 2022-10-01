import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { AppNavigator } from './AppNavigator'
import { AuthNavigator } from './AuthNavigator'

interface Props {
  isLoggedIn: boolean
}

export const AppRoute = ({ isLoggedIn }: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
