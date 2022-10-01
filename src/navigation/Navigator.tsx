import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { AuthNavigator } from './AuthNavigator'

export const AppRoute = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
