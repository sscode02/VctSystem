import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import routes from '../src/router/index'


import axios from "axios"
import Elementui from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'



const app = createApp(App)
app.use(Elementui)
app.use(routes)

app.mount('#app')
