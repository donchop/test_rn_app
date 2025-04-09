import axios from 'axios'
import { STAGE_URL } from 'react-native-dotenv'

let currentToken: string | null = null
let currentLogout: (() => Promise<void>) | null = null

export const setAuthData = (
  token: string | null,
  logout: () => Promise<void>,
) => {
  currentToken = token
  currentLogout = logout
}

const client = axios.create({
  baseURL: STAGE_URL,
  responseType: 'json',
})

client.interceptors.request.use((config) => {
  if (currentToken) {
    config.headers.Authorization = `Bearer ${currentToken}`
  }

  return config
})

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && currentLogout) {
      await currentLogout()
    }

    return Promise.reject(error.response?.data.message || error)
  },
)

export default client
