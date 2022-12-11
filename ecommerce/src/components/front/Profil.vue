<template>
    <h1>Profil <small class="fs-6">{{ userStore.user.email }}</small></h1>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>#num commande</th>
                <th>nombre de produit</th>
                <th>montant commande</th>
                <th>date commande</th>
                <th>status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="commande, index in commandes" :key="index">
                <td>{{ commande.id }}</td>
                <td>{{ commande.produits.length }}</td>
                <td>{{ commande.total }}</td>
                <td>{{ dt[index] }}</td>
                <td>{{ commande.status }}</td>
            </tr>
        </tbody>
    </table>    
</template>
<script setup>
    import {  CommandeApi } from "../../services/commande";
    import { onMounted , ref , computed } from "vue"
    import { useUserStore } from "../../stores/userStore"

    let commandes = ref([]);
    let userStore = useUserStore();

    onMounted( async() => {
        const commandeApi = new CommandeApi();
        const userEmail = userStore.user.email
        commandes.value = await commandeApi.getAllCommande(userEmail)
    })

    const dt = computed( () => {
        return commandes.value.map(item => new Intl.DateTimeFormat('fr-FR').format(item.dt_creation) )
    })

</script>