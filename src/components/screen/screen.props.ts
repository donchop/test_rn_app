import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { KeyboardOffsets, ScreenPresets } from './screen.presets'

export interface ScreenProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  preset?: ScreenPresets
  backgroundColor?: string
  bgColorSafeArea?: string
  bgImage?: string
  statusBar?: 'light-content' | 'dark-content'
  unsafe?: boolean
  keyboardOffset?: KeyboardOffsets
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never'
  customHeader?: React.ReactNode
}
