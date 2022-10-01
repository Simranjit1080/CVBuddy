import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BuildResume from '../screens/BuildResume'
import Header from '../components/Header'
import Onboarding from '../screens/Onboarding'
import Preview from '../screens/Preview'

export type NavigationStackParams = {
  AuthHome: undefined
  BuildResume: undefined
  Onboarding: undefined
  Home: undefined
  Preview: undefined
}

const Stack = createNativeStackNavigator<NavigationStackParams>()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="BuildResume"
        component={BuildResume}
        options={{
          header: () => <Header headerTitle="Build Resume" />,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Preview"
        component={Preview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
