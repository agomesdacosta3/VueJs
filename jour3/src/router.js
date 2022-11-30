// dans ce fichier // url <==> composant 

import { createRouter , createWebHistory } from "vue-router"
import Accueil from "./components/front/Accueil.vue"
import Contact from "./components/front/Contact.vue"


const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , name:"accueil" , component : Accueil},
        {path : "/contact" , name:"contact" , component : Contact},
    ]
})


export default router ; 