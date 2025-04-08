import { t } from 'i18next'
import * as Yup from 'yup'

import { LoginFields, MIN_USERNAME_LENGHT } from 'src/constants/index'

export const Schema = () =>
  Yup.object().shape({
    [LoginFields.USER_NAME]: Yup.string()
      .required(t('errors.requiredUserName'))
      .min(
        MIN_USERNAME_LENGHT,
        t('errors.minLengthUsername', { value: MIN_USERNAME_LENGHT }),
      ),
    [LoginFields.PASSWORD]: Yup.string().required(t('errors.requiredPassword')),
  })
