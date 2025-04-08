import React from 'react'
import { View } from 'react-native'

import { SVGIcon, Text } from 'src/components'
import { colors } from 'src/theme'

import * as S from './styles'

interface IErorrMessageProps {
  message: string
}

export const ErorrMessage = ({ message }: IErorrMessageProps) => {
  return (
    <View style={S.CONTAINER}>
      <SVGIcon width={18} height={18} name={'danger'} color={colors.white} />
      <Text
        preset="small"
        text={message}
        color={colors.white}
        numberOfLines={2}
      />
    </View>
  )
}
