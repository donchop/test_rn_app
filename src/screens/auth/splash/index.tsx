import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { AuthStackList } from 'src/navigation'
import { AuthStack } from 'src/constants'
import { Screen } from 'src/components'
import { Loader } from 'src/components'

import * as S from './styles'

export const SplashScreen = () => {
  return (
    <Screen style={S.CONTAINER}>
      <Loader />
    </Screen>
  )
}
