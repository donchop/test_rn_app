import React, { FC, useCallback } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { AuthStackList } from 'src/navigation'
import { AuthStack } from 'src/constants'
import { GradientButton, Screen } from 'src/components'

import * as S from './styles'

export const LoginScreen: FC<
  StackScreenProps<AuthStackList, AuthStack.LOGIN>
> = () => {
  const handleSubmit = useCallback(() => {
    console.log('login')
  }, [])

  return (
    <Screen>
      <View style={S.CONTAINER}>
        <GradientButton tx="loginScreen.btn" onPress={handleSubmit} />
      </View>
    </Screen>
  )
}
