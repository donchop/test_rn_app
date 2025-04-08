import { ViewStyle } from 'react-native'
import { colors, spacing } from 'src/theme'

export const CONTAINER: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[3],
  gap: spacing[2],
  borderRadius: 8,
  flexDirection: 'row',
  backgroundColor: colors.error,
}
