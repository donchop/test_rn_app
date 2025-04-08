import React from 'react'

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
