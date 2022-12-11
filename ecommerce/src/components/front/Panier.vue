<template>
    <h1>votre Panier</h1>
    <TableauPanier />

    <div class="text-end" v-if="show">
        <RouterLink :to="{name:'identification'}" class="btn btn-info">s'identifier</RouterLink>
    </div>
    <div class="text-end" v-else>
        <RouterLink :to="{name:'checkout'}" class="btn btn-success">checkout</RouterLink>
    </div>
    <div>
        {{ JSON.stringify(userStore.user) }}
    </div>
</template>
<script setup>
import TableauPanier from './TableauPanier.vue';
import { RouterLink } from "vue-router"
import {useUserStore} from "../../stores/userStore"
import { onMounted , ref } from "vue"
let show = ref(true)
const userStore = useUserStore();

onMounted( () => {
   

    if(userStore.user && userStore.user.isLogged){
        show.value = false
    }
})


</script>