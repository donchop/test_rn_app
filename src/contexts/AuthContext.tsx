import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

import { setAuthData } from 'src/api/client'

import { getToken, removeToken } from '../utils/storage'

export interface IAuthContext {
  token: string | null
  isLoading: boolean
  checkAuth: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<null | string>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setAuthData(token, logout)
  }, [token])

  const checkAuth = async () => {
    try {
      const newToken = await getToken()
      setToken(newToken)
    } catch (error) {
      setToken(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  const logout = async () => {
    try {
      await removeToken()
      setToken(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ token, isLoading, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used with AuthProvider')
  }

  return context
}
