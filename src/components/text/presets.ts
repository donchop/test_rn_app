import { TextStyle } from 'react-native'

import { colors, typography } from 'src/theme'

const BASE: TextStyle = {
  color: colors.black,
  fontFamily: typography.primary500,
}

export const presets: {
  default: TextStyle
  small: TextStyle
} = {
  default: {
    ...BASE,
    fontSize: 16,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
}

export const weightPresets: {
  regular: TextStyle
  medium: TextStyle
  semiBold: TextStyle
  bold: TextStyle
} = {
  regular: {
    ...BASE,
  },
  medium: {
    ...BASE,
    fontFamily: typography.primary500,
  },
  semiBold: {
    ...BASE,
    fontFamily: typography.primary600,
  },
  bold: {
    ...BASE,
    fontFamily: typography.primary700,
  },
}

export type TextPresets = keyof typeof presets
export type WeightPresets = keyof typeof weightPresets
