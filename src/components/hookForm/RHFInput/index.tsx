import React, { FC, useCallback, useState } from 'react'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
import {
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
} from 'react-native'
import { t } from 'i18next'

import { colors } from 'src/theme'
import { SVGIcon, Text } from 'src/components'

import { TxKeyPath } from 'src/models'

import * as S from './styles'

interface IRHFInputProps extends TextInputProps {
  name: string
  control: Control<any>
  rules?: RegisterOptions
  placeholder?: string
  placeholderTx?: TxKeyPath
  labelTx: TxKeyPath
  styleContainer?: ViewStyle
  inputStyle?: ViewStyle
}

const RHFInput: FC<IRHFInputProps> = ({
  name,
  control,
  rules,
  placeholder = '',
  placeholderTx,
  labelTx,
  styleContainer,
  inputStyle,
  keyboardType,
  ...rest
}) => {
  const inputStyles = [S.INPUT, inputStyle]
  const i18nPlaceholder = placeholderTx ? t(placeholderTx) : placeholder
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          const showLabel: boolean = (!!error || isFocused) && !!value

          const handleClear = () => onChange('')

          return (
            <View>
              <View
                style={[
                  S.CONTAINER,
                  styleContainer,
                  isFocused && S.CTR_FOCUSED,
                  !showLabel && S.INPUT_WITH_LABEL,
                  !!error && S.CTR_ERROR,
                ]}
              >
                <View style={S.INPUT_CTR}>
                  {showLabel && (
                    <View>
                      <Text
                        preset="small"
                        weight="regular"
                        tx={labelTx}
                        color={!!error ? colors.error : colors.blue}
                      />
                    </View>
                  )}
                  <TextInput
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                    cursorColor={colors.blue}
                    style={[inputStyles]}
                    placeholder={i18nPlaceholder}
                    placeholderTextColor={!!error ? colors.error : colors.grey}
                    keyboardType={keyboardType}
                  />
                </View>
                {!!value && !isFocused && (
                  <TouchableOpacity
                    style={S.CLEAR_CTR}
                    onPress={handleClear}
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                  >
                    <SVGIcon
                      width={10}
                      height={10}
                      color={colors.white}
                      name={'cross'}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {!!error && (
                <View style={S.ERROR_CTR}>
                  <Text
                    preset="small"
                    style={S.ERROR}
                    text={error.message}
                    color={colors.error}
                  />
                </View>
              )}
            </View>
          )
        }}
      />
    </View>
  )
}

export default RHFInput
