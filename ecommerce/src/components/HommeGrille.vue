
<template>
    <div class="row">
        <article v-for="produit , index in articles" :key="index" class="col-4">
            <h2>{{ produit.nom }}</h2>
            <img :src="produit.image" alt="" class="img-fluid">
            <footer class="d-flex justify-content-between align-items-baseline mt-3">
                <p class="mb-0">prix : {{ produit.prix }}  €</p>
                <RouterLink :to="{name:'produit' , params :{id : produit.id}}" class="btn btn-sm btn-outline-dark" >voir le produit</RouterLink>
            </footer>
        </article>
    </div>
</template>

<script setup>
    import CatalogueApi from '../../services/catalogue';
    import { RouterLink } from "vue-router";
    import { ref } from "vue" ;
    let articles = ref([]);
    async function getArticles(){
        const api = new CatalogueApi()
        const data = await api.getAll()
        console.log(data);
        articles.value = data ;
    }
    await getArticles();
</script>