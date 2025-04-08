import * as React from 'react'
import { ImageStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { colors } from 'src/theme'

import { icons, IconTypes } from './icons'

export interface IconProps extends SvgProps {
  size?: number
  width?: number
  height?: number
  color?: string
  fill?: string
  name: IconTypes
  style?: ImageStyle
}

export function SVGIcon({
  name,
  size = 24,
  width,
  height,
  color = colors.dark,
  fill = colors.dark,
  ...props
}: IconProps) {
  const Icon = icons[name] || icons.danger

  return (
    <Icon
      width={width || size}
      height={height || size}
      color={color}
      fill={fill}
      {...props}
    />
  )
}
