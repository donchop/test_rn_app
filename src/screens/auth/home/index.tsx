import React, { FC, useCallback } from 'react'
import { View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { AuthStackList } from 'src/navigation'
import { AuthStack } from 'src/constants'
import { Screen, GradientButton } from 'src/components'

import * as S from './styles'

export const HomeScreen: FC<
  StackScreenProps<AuthStackList, AuthStack.HOME>
> = ({ navigation }) => {
  const navToLogin = () => navigation.navigate(AuthStack.LOGIN)

  return (
    <Screen>
      <View style={S.CONTAINER}>
        <GradientButton tx="homeScreen.btn" onPress={navToLogin} />
      </View>
    </Screen>
  )
}
