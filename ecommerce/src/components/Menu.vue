<template>
    <div class="bg-primary">
        <nav class="navbar navbar-expand navbar-dark container">
            <RouterLink :to="{name : 'home'}" class="navbar-brand">E-Commerce</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="{name:'home'}" class="nav-link">Accueil</RouterLink>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{name:'panier'}" class="nav-link">Panier</RouterLink>
                    <span :class="classBadge">{{ panierStore.nbProduit }}</span>
                </li>
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{name:'profil'}" class="nav-link">Profil</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from "vue-router"
    import { usePanierStore } from "../stores/panierStore";
    import {computed} from "vue"
    const panierStore = usePanierStore();

    const classBadge = computed(() => {
        return panierStore.nbProduit === 0 ? "badge bg-dark" : "badge bg-success"
    })
</script>