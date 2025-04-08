import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppNavigator } from './navigation'

import './locales'

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}

export default App
