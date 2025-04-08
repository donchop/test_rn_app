import * as Keychain from 'react-native-keychain'

const AUTH_TOKEN = 'authToken'

export const setToken = async (token: string) => {
  await Keychain.setGenericPassword(AUTH_TOKEN, token)
}

export const getToken = async () => {
  const credentials = await Keychain.getGenericPassword()

  return credentials ? credentials.password : null
}

export const removeToken = async () => {
  await Keychain.resetGenericPassword()
}
