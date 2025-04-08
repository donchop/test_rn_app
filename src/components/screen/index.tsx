import * as React from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { isNonScrolling, presets } from './screen.presets'
import { ScreenProps } from './screen.props'

const ScreenWithoutScrolling = (props: ScreenProps) => {
  const preset = presets.fixed
  const insets = useSafeAreaInsets()
  const style = props.style || {}

  return (
    <View style={[preset.outer]}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      {props.customHeader}
      <View
        style={[
          preset.inner,
          style,
          {
            paddingTop: !props.customHeader ? insets.top : 0,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {props.children}
      </View>
    </View>
  )
}

const ScreenWithScrolling = (props: ScreenProps) => {
  const preset = presets.scroll
  const insets = useSafeAreaInsets()
  const style = props.style || {}

  return (
    <View style={[preset.outer]}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      {props.customHeader}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          preset.outer,
          {
            paddingTop: !props.customHeader ? insets.top : 0,
            paddingBottom: insets.bottom,
          },
        ]}
        contentContainerStyle={[preset.inner, style]}
        keyboardShouldPersistTaps={props.keyboardShouldPersistTaps || 'handled'}
      >
        {props.children}
      </ScrollView>
    </View>
  )
}

export const Screen = (props: ScreenProps) => {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />
  } else {
    return <ScreenWithScrolling {...props} />
  }
}
