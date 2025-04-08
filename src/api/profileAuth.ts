import { AxiosResponse } from 'axios'
import { IProfileDto } from 'src/models'

import client from './client'

export const getProfile = async (): Promise<AxiosResponse<IProfileDto>> => {
  return client.get('/auth/me')
}
