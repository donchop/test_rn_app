import { ViewStyle } from 'react-native'

import { spacing } from 'src/theme'

export const CONTAINER: ViewStyle = {
  width: '100%',
  paddingHorizontal: spacing[4],
  paddingBottom: spacing[5],
  flexDirection: 'row',
}

export const SIDE_CTR: ViewStyle = {
  width: 24,
}

export const TITLE_CTR: ViewStyle = {
  flex: 1,
  width: '100%',
  alignItems: 'center',
}
