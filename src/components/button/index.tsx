import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import { Loader, Text } from 'src/components'
import { colors } from 'src/theme'

import { viewPresets, textPresets } from './presets'
import { ButtonProps } from './props'

export function Button({
  preset = 'primary',
  tx,
  text,
  color,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  disabled = false,
  loading,
  ...rest
}: ButtonProps) {
  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]
  const textStyle = textPresets[preset] || textPresets.primary
  const textStyles = [textStyle, textStyleOverride]

  const content = children || (
    <Text tx={tx} text={text} style={textStyles} color={color} />
  )

  return (
    <TouchableOpacity style={viewStyles} {...rest} disabled={disabled}>
      {loading ? <Loader size={'small'} color={colors.primary} /> : content}
    </TouchableOpacity>
  )
}
