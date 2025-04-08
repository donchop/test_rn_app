import { AxiosResponse } from 'axios'
import { IAuthDto } from 'src/models'

import client from './client'

export const login = async (data: {
  username: string
  password: string
}): Promise<AxiosResponse<IAuthDto>> => {
  return client.post('/auth/login', {
    expiresInMins: 1,
    ...data,
  })
}
