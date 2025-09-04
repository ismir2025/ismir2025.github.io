// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/variables.scss'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' 
// vuetify/iconsets/mdi ���� aliases, mdi ��������

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // ��Ʈ ��� MDI ��Ʈ�� �⺻ ���������� ����
    aliases,
    sets: {
      mdi,
    },
  },
})
