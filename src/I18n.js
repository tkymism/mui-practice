import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation_en from './locale/en/translation'
import translation_ja from './locale/ja/translation'


const resources = {
    en: {
      translation: translation_en
    },
    ja: {
      translation: translation_ja
    },
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ja',
    debug: true,
  
    interpolation: {
        escapeValue: false
    }
})

export default i18n



