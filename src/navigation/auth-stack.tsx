import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import { LoginScreen } from 'src/screens'
import { AuthStack } from 'src/constants'

export type AuthStackList = {
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
    >
      <Stack.Screen name={AuthStack.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  )
}
