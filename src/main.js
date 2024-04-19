import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import SimplePlugin from "@/plugins/simplePlugin.js";

const app = createApp(App);
app.use(SimplePlugin); // Подключаем плагин
app.mount('#app');
