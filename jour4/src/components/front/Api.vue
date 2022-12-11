<template>
    <div>
        <h1>Exo - utiliser une API et Suspense</h1>
        <input type="text" class="form-control my-3 w-50" placeholder="texte recherché" v-model="recherche">
        <Suspense>
            <template #default>
                <Cocktails :textRecherche="recherche" />
            </template>
            <template #fallback>
                attente de resultat
            </template>
        </Suspense> 
    </div>  
</template>

<script>
    import {Suspense} from "vue";
    import Cocktails from "./Cocktails.vue"
    export default {
        data : () => ({
            recherche : ""
        }),
        components :{
            Suspense, Cocktails
        }
    }
</script>
