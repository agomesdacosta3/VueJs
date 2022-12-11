<template>
    <table class="table table-striped table-hover align-middle">
        <thead>
            <tr>
                <th>#id</th>
                <th>nom</th>
                <th>image</th>
                <th>prix</th>
                <th>quantite</th>
                <th>total</th>
            </tr>
        </thead>
        <tbody v-if="panierStore.nbProduit === 0">
            <tr>
                <td colspan="6" class="text-center"> aucun produit actuellement dans votre panier </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr v-for="produit , index in panierStore.panier" :key="index">
                <td>{{ produit.id }}</td>
                <td>{{ produit.nom }}</td>
                <td><img v-bind:src="produit.image" alt="" width="150"></td>
                <td>{{produit.prix}}</td>
                <td>
                    <span class="d-flex align-items-baseline">
                        <button class="btn btn-dark btn-sm" @click="panierStore.moins(produit.id)">-</button>
                        <span class="mx-3">{{produit.quantite}}</span>
                        <button class="btn btn-dark btn-sm" @click="panierStore.plus(produit.id)">+</button>
                    </span>
                </td>
                <td>{{ produit.prix * produit.quantite }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5" class="text-end"> total</td>
                <td>{{ panierStore.totalPanier }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
    import { usePanierStore } from "../../stores/panierStore"
    let panierStore  =  usePanierStore()
</script>