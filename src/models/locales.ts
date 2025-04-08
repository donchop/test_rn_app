import 'i18next'
import { TOptions } from 'i18next'

import en from 'src/locales/langs/en'

type DefaultLocale = typeof en.translation
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]

declare module 'i18next' {
  // Extend the TFunction interface
  interface TFunction {
    (key: TxKeyPath, options?: TOptions | string): string
    <TResult>(key: TxKeyPath, options?: TOptions | string): TResult
  }
}
