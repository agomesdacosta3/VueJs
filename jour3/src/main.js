import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./router"; 

createApp(App)
    .use(router) // ajouter une plugin (extension) à notre projet
    .mount('#app')
    