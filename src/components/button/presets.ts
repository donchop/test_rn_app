import { ViewStyle, TextStyle } from 'react-native'

import { colors, spacing, typography } from 'src/theme'

const BASE_VIEW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 9,
  paddingHorizontal: spacing[4],
  borderRadius: 40,
  backgroundColor: colors.white,
}

const BASE_TEXT: TextStyle = {
  color: colors.black,
  fontSize: 16,
  fontFamily: typography.primary500,
  textAlign: 'center',
  textTransform: 'capitalize',
}

export const viewPresets: {
  primary: ViewStyle
} = {
  primary: {
    ...BASE_VIEW,
  },
}

export const textPresets: {
  primary: TextStyle
} = {
  primary: { ...BASE_TEXT },
}

export type ButtonPresetNames = keyof typeof viewPresets
