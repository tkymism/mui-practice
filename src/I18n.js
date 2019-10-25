import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
      translation: {
        'dashboard'     : 'Dashboard',
        'my company'    : 'Fujitsu',
        'saved report'  : 'Saved Report',
      }
    },
    ja: {
      translation: {
        'dashboard'     : 'ダッシュボード',
        'my company'    : '富士通',
        'saved report'  : '保存したレポート',
      }
    },
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ja',
    debug: true,
  
    interpolation: {
        escapeValue: false
    }
});

export default i18n



