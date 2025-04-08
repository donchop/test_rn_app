import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'

import { MainStackList } from 'src/navigation'
import { MainStack } from 'src/constants'
import { useAuth } from 'src/contexts/AuthContext'
import { Button, ProfileHeader, Screen } from 'src/components'
import { useProfile } from 'src/hooks/useProfile'

import * as S from './styles'

export const ProfileScreen: FC<
  StackScreenProps<MainStackList, MainStack.PROFILE>
> = () => {
  const { logout } = useAuth()
  const { data: profile, isLoading } = useProfile()

  return (
    <Screen
      style={S.CONTAINER}
      customHeader={
        <ProfileHeader
          fullName={profile ? `${profile.firstName} ${profile.lastName}` : ''}
          loading={isLoading}
        />
      }
    >
      <Button tx="profileScreen.logout" onPress={logout} />
    </Screen>
  )
}
