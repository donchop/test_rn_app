import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './langs/en'

const DEFAULT_LANG = 'en'

const detectLang = async (
  cb: (lng: string | readonly string[] | undefined) => void,
) => {
  cb(DEFAULT_LANG)
}

export default i18next
  .use({
    type: 'languageDetector',
    async: true,
    detect: detectLang,
    init: () => {},
    cacheUserLanguage: () => {},
  })
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANG,
    debug: false,
    resources: {
      en: {
        ...en,
      },
    },
  })

type DefaultLocale = typeof en.translation
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
