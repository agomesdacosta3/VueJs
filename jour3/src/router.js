// dans ce fichier // url <==> composant 

import { createRouter , createWebHistory } from "vue-router"
import Accueil from "./components/front/Accueil.vue"
import Contact from "./components/front/Contact.vue"
import Single from "./components/front/Single.vue"
import NotFound from "./components/front/NotFound.vue"
import Login from "./components/front/Login.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , name:"accueil" , component : Accueil},
        {path : "/contact" , name:"contact" , component : Contact},
        {path : "/article/:id" , name:"single" , component : Single}, // route avec paramètre variable id 
        {path : "/login" , name : "login" , component : Login} ,
        {path : "/:pathMatch(.*)*" , name : "NotFound" , component : NotFound }
        // si aucune route ne match => exécuter un composant NotFound
        // il faut que cette route NotFound soit mise en dernier 
    ]
})


export default router ; 