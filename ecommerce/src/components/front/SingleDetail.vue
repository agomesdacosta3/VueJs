<template>
    <h1>Fiche Produit</h1>
    <Suspense>
        <template #default>
            
        </template>
        <template #fallback>
            Attente des datas
        </template>
    </Suspense>
</template>
<script setup>
    import { useRoute } from "vue-router"
    import { ref , Suspense } from "vue"
    import CatalogueApi from "../../services/catalogue";
    let produit = ref({})

    async function getProduit(){
        const route = useRoute();
        const id = route.params.id ;
        const api = new CatalogueApi()
        const data = await api.getOne(id)
        produit.value = data; 
    }
    
    await getProduit()
    
</script>