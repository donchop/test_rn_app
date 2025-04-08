import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import { ProfileScreen } from 'src/screens'
import { MainStack } from 'src/constants'

export type MainStackList = {
  [MainStack.PROFILE]: undefined
}

const Stack = createStackNavigator<MainStackList>()

export const Main_Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={MainStack.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  )
}
