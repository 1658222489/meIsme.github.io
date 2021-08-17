import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementPlus from 'element-plus';         //引入elementPLus
import 'element-plus/lib/theme-chalk/index.css';//elementPlus的css
import axios from 'axios';                      //axios请求插件
import VueAxios from 'vue-axios';               //可以让vue直接使用（use）axios的小插件
import config from '@/config';

//创建app
const app = createApp(App);
app.config.globalProperties = config;
app.use(store)
    .use(router)
    .use(ElementPlus)
    .use(VueAxios, axios)
    .mount('#app');
export default app
