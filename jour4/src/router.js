import {createRouter , createWebHistory} from "vue-router";
import Accueil from "./components/front/Accueil.vue"
import Slot from "./components/front/Slot.vue"
import MySuspense from "./components/front/MySuspense.vue"

export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: "/" , name: "accueil" , component : Accueil },
        {path: "/slot" , name: "slot" , component : Slot},
        {path: "/suspense" , name: "suspense" , component : MySuspense },
    ]
})