import React from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

import { TxKeyPath } from 'src/models'

import { ButtonPresetNames } from './presets'

export interface ButtonProps extends TouchableOpacityProps {
  tx?: TxKeyPath
  text?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  preset?: ButtonPresetNames
  children?: React.ReactNode
  color?: string
  loading?: boolean
}
