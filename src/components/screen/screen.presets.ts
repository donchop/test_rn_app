import { ViewStyle } from 'react-native'

import { colors } from 'src/theme'

export const offsets = {
  none: 0,
}
export type KeyboardOffsets = keyof typeof offsets

export const presets = {
  fixed: {
    outer: {
      flex: 1,
    } as ViewStyle,
    inner: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: colors.primary,
    } as ViewStyle,
  },
  scroll: {
    outer: {
      flex: 1,
      height: '100%',
      backgroundColor: colors.primary,
    } as ViewStyle,
    inner: {
      flexGrow: 1,
    } as ViewStyle,
  },
}

export type ScreenPresets = keyof typeof presets

export function isNonScrolling(preset?: ScreenPresets) {
  return !preset || !presets[preset] || preset === 'fixed'
}
