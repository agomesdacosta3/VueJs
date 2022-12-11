import { createRouter, createWebHistory } from "vue-router"
import Accueil from "./components/front/Accueil.vue"
import Login from "./components/front/Login.vue"
import Inscription from "./components/front/Inscription.vue"


export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , name : "accueil" , component: Accueil},
        {path : "/inscription" , name : "inscription" , component: Inscription},
        {path : "/login" , name : "login" , component: Login}
    ]
})