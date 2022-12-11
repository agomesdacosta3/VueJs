<template>
    <h1>Fiche Produit</h1>
    <div class="row">
        <div class="col-4">
            <img :src="produit.image" alt="" class="img-fluid">
        </div>
        <div class="col-8">
            <header class="d-flex align-items-baseline justify-content-between">
                <h2>{{ produit.nom  }}</h2>
                <span>{{ produit.prix }} €</span>
            </header>
            <p>{{ produit.description  }}</p>
            <form class="d-flex align-items-baseline" @submit.prevent="submit">
                <input type="number" style="width:80px" class="me-4" v-model="quantite">
                <button class="btn btn-success">ajouter au panier</button>
            </form>
            <div class="alert alert-success mt-3" v-if="show">
                produit ajouté dans le panier
            </div>
        </div>
       
    </div>
</template>
<script setup>
    import { useRoute } from "vue-router"
    import { ref , onMounted } from "vue"
    import { usePanierStore } from "../../stores/panierStore";
    import CatalogueApi from "../../services/catalogue";
    const route = useRoute();
    const id = ref(route.params.id) ;
    let produit = ref({})
    let quantite = ref(1)
    let show = ref(false)
    let panierStore = usePanierStore();

    function submit(){
        if(produit.value){
            const itemPanier = {
                ...produit.value , 
                quantite : quantite.value}
            panierStore.add(itemPanier);
            show.value = true;
            setTimeout( () => {
                show.value = false;
            }, 2000)
        }
        
    }


    async function getProduit(){
        const api = new CatalogueApi()
        const data = await api.getOne(id.value)
        produit.value = data; 
    }

    onMounted( async() => {
        await getProduit()
    })
    
</script>