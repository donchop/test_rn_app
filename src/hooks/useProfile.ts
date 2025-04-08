import { useQuery } from '@tanstack/react-query'

import { getProfile } from 'src/api/profileAuth'
import { IProfile, IProfileDto } from 'src/models'

export const formatProfileDto = (dto: IProfileDto): IProfile => {
  return {
    id: dto.id,
    firstName: dto.firstName,
    lastName: dto.lastName,
  }
}

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const dto = await getProfile()

      return formatProfileDto(dto.data)
    },
  })
}
