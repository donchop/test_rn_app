import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native'
import { colors } from 'src/theme'
import { SplashScreen } from 'src/screens'
import { useAuth } from 'src/contexts/AuthContext'

import { Main_Stack } from './main-stack'
import { Auth_Stack } from './auth-stack'

const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primary,
  },
}

export const AppNavigator = () => {
  const { token, isLoading } = useAuth()

  return (
    <NavigationContainer theme={theme}>
      {isLoading ? <SplashScreen /> : !token ? <Auth_Stack /> : <Main_Stack />}
    </NavigationContainer>
  )
}
