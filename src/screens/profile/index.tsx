import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { MainStackList } from 'src/navigation'
import { MainStack } from 'src/constants'

export const ProfileScreen: FC<
  StackScreenProps<MainStackList, MainStack.PROFILE>
> = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}
