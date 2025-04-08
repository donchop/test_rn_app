import React, { FC, useCallback } from 'react'
import { View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthStackList } from 'src/navigation'
import { AuthStack, LoginFields } from 'src/constants'
import { GradientButton, Loader, RHFInput, Screen } from 'src/components'
import { useLogin } from 'src/hooks/useLogin'

import { Schema } from './loginSchema'
import { ErorrMessage } from './components'
import * as S from './styles'

export interface ILoginFormValues {
  [LoginFields.USER_NAME]: string
  [LoginFields.PASSWORD]: string
}

export const LoginScreen: FC<
  StackScreenProps<AuthStackList, AuthStack.LOGIN>
> = () => {
  const methods = useForm<ILoginFormValues>({
    resolver: yupResolver(Schema()),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  })
  const { mutate: login, isPending, error } = useLogin()

  const { control, handleSubmit } = methods

  const onSubmit = useCallback(
    (data: ILoginFormValues) => {
      login(data)
    },
    [login],
  )

  return (
    <Screen>
      {isPending ? (
        <View style={S.LOADING_CTR}>
          <Loader />
        </View>
      ) : (
        <View style={S.CONTAINER}>
          <RHFInput
            name={LoginFields.USER_NAME}
            control={control}
            placeholderTx="inputs.userNamePlaceholder"
            labelTx={'inputs.userName'}
          />
          <RHFInput
            name={LoginFields.PASSWORD}
            control={control}
            secureTextEntry={true}
            placeholderTx="inputs.passwordPlaceholder"
            labelTx={'inputs.password'}
          />
          {!!error && <ErorrMessage message={error} />}
          <GradientButton
            tx="loginScreen.btn"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      )}
    </Screen>
  )
}
