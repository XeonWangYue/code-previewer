import { createApp } from 'vue'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import { basicSetup } from 'codemirror'
import VueCodemirror from 'vue-codemirror'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueCodemirror, {
    extensions: [basicSetup]
})

app.mount('#app')
