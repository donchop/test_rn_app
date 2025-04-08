import { useMutation } from '@tanstack/react-query'

import { login } from 'src/api/authApi'
import { useAuth } from 'src/contexts/AuthContext'
import { setToken } from 'src/utils/storage'

export const useLogin = () => {
  const { checkAuth } = useAuth()

  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      await setToken(data.data.accessToken)
      checkAuth()
    },
  })
}
