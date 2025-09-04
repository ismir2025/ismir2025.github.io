// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' 
// vuetify/iconsets/mdi 에서 aliases, mdi 가져오기

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // 폰트 기반 MDI 세트를 기본 아이콘으로 지정
    aliases,
    sets: {
      mdi,
    },
  },
})
