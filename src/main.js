import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 가져오기
import vuetify from './plugins/vuetify'; // Vuetify 설정
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(router) // 라우터 사용
  .use(vuetify) // Vuetify 사용
  .mount('#app');
