import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { AuthStackList } from 'src/navigation'
import { AuthStack } from 'src/constants'

export const LoginScreen: FC<
  StackScreenProps<AuthStackList, AuthStack.LOGIN>
> = () => {
  return (
    <View>
      <Text>test</Text>
    </View>
  )
}
