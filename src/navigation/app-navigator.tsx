import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native'

import { Main_Stack } from './main-stack'
import { Auth_Stack } from './auth-stack'
import { colors } from 'src/theme'

const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primary,
  },
}

export const AppNavigator = () => {
  const token: boolean = false

  return (
    <NavigationContainer theme={theme}>
      {token ? <Main_Stack /> : <Auth_Stack />}
    </NavigationContainer>
  )
}
