import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { t } from 'i18next'

import { colors, spacing } from 'src/theme'
import { Loader, SVGIcon, Text } from 'src/components'

import * as S from './styles'

interface IProfileHeaderProps {
  fullName: string
  loading: boolean
}

export const ProfileHeader = ({ fullName, loading }: IProfileHeaderProps) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[S.CONTAINER, { paddingTop: spacing[3] + insets.top }]}>
      <View style={S.SIDE_CTR}>
        <TouchableOpacity>
          <SVGIcon
            width={12}
            height={20}
            name={'chevronLeft'}
            color={colors.dark}
          />
        </TouchableOpacity>
      </View>
      <View style={S.TITLE_CTR}>
        {loading || !fullName ? (
          <Loader />
        ) : (
          <Text
            preset="h3"
            weight="medium"
            text={t('profileScreen.headerTitle', { value: fullName })}
          />
        )}
      </View>
      <View style={S.SIDE_CTR} />
    </View>
  )
}
