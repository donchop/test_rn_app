import * as React from 'react'
import {
  Text as ReactNativeText,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import { TxKeyPath } from 'src/locales'

import { presets, weightPresets, TextPresets, WeightPresets } from './presets'

export interface ITextProps extends TextProps {
  children?: React.ReactNode
  tx?: TxKeyPath
  color?: string
  text?: string
  style?: StyleProp<TextStyle>
  preset?: TextPresets
  weight?: WeightPresets
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
}

export function Text({
  preset = 'default',
  weight = 'regular',
  tx,
  color,
  text,
  children,
  style: styleOverride,
  textAlign = 'auto',
  ...rest
}: ITextProps) {
  const { t } = useTranslation()

  const i18nText = tx && t(tx)
  const content = i18nText || text || children

  const style = presets[preset] || presets.default
  const weightStyles = weightPresets[weight]
  const styles = [
    style,
    weightStyles,
    styleOverride,
    { textAlign: textAlign },
    color ? { color: color } : null,
  ]

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  )
}
