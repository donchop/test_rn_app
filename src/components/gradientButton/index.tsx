import * as React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Text } from 'src/components'

import { viewPresets, textPresets, colorsPresets } from './presets'
import { GradientButtonProps } from './props'

export const WRAP: ViewStyle = {
  flex: 1,
  borderRadius: 80,
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 4,
  paddingHorizontal: 20,
}

export function GradientButton({
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
}: GradientButtonProps) {
  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]
  const textStyle = textPresets[preset] || textPresets.primary
  const textStyles = [textStyle, textStyleOverride]

  return (
    <LinearGradient
      colors={colorsPresets[preset]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={viewStyles}
    >
      <TouchableOpacity style={WRAP} {...rest} disabled={disabled || loading}>
        <Text tx={tx} text={text} style={textStyles} color={color} />
      </TouchableOpacity>
    </LinearGradient>
  )
}
