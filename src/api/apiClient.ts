import { getToken } from '../utils/storage'

const BASE_URL = process.env.STAGE_URL

export const apiClient = async (url: string, options?: RequestInit) => {
  const token = await getToken()

  const headers = {
    'Content-Type': 'application/json',
    ...options?.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  })
}
