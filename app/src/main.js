import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Asegúrate de tener este archivo y que esté configurado correctamente
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import '@mdi/font/css/materialdesignicons.min.css'

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
