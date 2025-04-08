import React from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

import { TxKeyPath } from 'src/locales'

import { ButtonPresetNames } from './presets'

export interface GradientButtonProps extends TouchableOpacityProps {
  tx?: TxKeyPath
  text?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  preset?: ButtonPresetNames
  children?: React.ReactNode
  color?: string
  loading?: boolean
}
