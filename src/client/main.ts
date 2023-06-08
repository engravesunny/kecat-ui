import { createApp } from "vue";
import KeUI from '@/index'
import App from "./app.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(KeUI())
app.mount('#app')

