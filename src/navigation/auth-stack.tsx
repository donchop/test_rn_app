import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import { HomeScreen, LoginScreen } from 'src/screens'
import { AuthStack } from 'src/constants'

export type AuthStackList = {
  [AuthStack.HOME]: undefined
  [AuthStack.LOGIN]: undefined
}

const Stack = createStackNavigator<AuthStackList>()

export const Auth_Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={AuthStack.HOME}
    >
      <Stack.Screen name={AuthStack.HOME} component={HomeScreen} />
      <Stack.Screen name={AuthStack.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  )
}
