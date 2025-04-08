import React, { useEffect, useState } from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native'

import { Main_Stack } from './main-stack'
import { Auth_Stack } from './auth-stack'
import { colors } from 'src/theme'
import { getToken } from 'src/utils/storage'
import { SplashScreen } from 'src/screens'

const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primary,
  },
}

export const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getToken()
        setIsAuth(!!token)
      } catch (error) {
        console.error('Auth error', error)
      } finally {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [])

  return (
    <NavigationContainer theme={theme}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>{isAuth ? <Main_Stack /> : <Auth_Stack />}</>
      )}
    </NavigationContainer>
  )
}
