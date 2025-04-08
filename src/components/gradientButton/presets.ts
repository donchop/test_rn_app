import { ViewStyle, TextStyle } from 'react-native'

import { colors, spacing, typography } from 'src/theme'

const BASE_VIEW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 4,
  paddingHorizontal: spacing[2],
  borderRadius: 80,
  backgroundColor: colors.transparent,
}

const BASE_TEXT: TextStyle = {
  color: colors.white,
  fontSize: 16,
  fontFamily: typography.primary600,
  textAlign: 'center',
}

export const viewPresets: {
  primary: ViewStyle
  secondary: ViewStyle
} = {
  primary: {
    ...BASE_VIEW,
  },
  secondary: {
    ...BASE_VIEW,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.blue,
  },
}

export const textPresets: {
  primary: TextStyle
  secondary: TextStyle
} = {
  primary: { ...BASE_TEXT },
  secondary: { ...BASE_TEXT, color: colors.blue },
}

export const colorsPresets: {
  primary: string[]
  secondary: string[]
} = {
  primary: [colors.blue, colors.blueLight],
  secondary: [colors.white, colors.dark],
}

export type ButtonPresetNames = keyof typeof viewPresets
