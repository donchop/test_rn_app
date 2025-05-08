import { IProfileDto } from 'src/models'

import client from './client'

export const getProfile = async (): Promise<IProfileDto> => {
  const res = await client.get('/auth/me')
  return res.data
}
