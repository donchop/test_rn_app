import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import { colors } from 'src/theme'

interface ILoaderProps extends ActivityIndicatorProps {
  color?: string
}

export const Loader = ({ color = colors.blue, ...rest }: ILoaderProps) => {
  return <ActivityIndicator size="large" color={color} {...rest} />
}
