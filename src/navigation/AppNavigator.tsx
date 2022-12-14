import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

export type NavigationStackParams = {
  Login: undefined
  SignUp: undefined
}

const Stack = createNativeStackNavigator<NavigationStackParams>()

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
