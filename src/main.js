import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import SimplePlugin from "@/plugins/simplePlugin.js";

const app = createApp(App);
app.use(router)

app.mount('#app');
