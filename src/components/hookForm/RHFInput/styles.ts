import { TextStyle, ViewStyle } from 'react-native'

import { colors, spacing } from 'src/theme'

export const CONTAINER: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  borderRadius: 8,
  paddingVertical: 6,
  paddingHorizontal: spacing[4],
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: colors.greyLight,
}

export const CTR_FOCUSED: ViewStyle = {
  borderColor: colors.blue,
}

export const CTR_ERROR: ViewStyle = {
  borderColor: colors.error,
}

export const MR_2: ViewStyle = {
  marginRight: spacing[2],
}

export const MB_2: ViewStyle = {
  marginBottom: spacing[2],
}

export const INPUT_CTR: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
}

export const INPUT: TextStyle = {
  padding: 0,
  fontSize: 16,
  color: colors.dark,
}

export const INPUT_WITH_LABEL: TextStyle = {
  paddingVertical: spacing[4],
}

export const CLEAR_CTR: ViewStyle = {
  width: 17,
  height: 17,
  backgroundColor: colors.grey100,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
}

export const ERROR_CTR: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: spacing[2],
  paddingVertical: spacing[2],
}

export const ERROR: TextStyle = {
  lineHeight: 12,
}
