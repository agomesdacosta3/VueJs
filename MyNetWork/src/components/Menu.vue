<template>
    <div class="bg-primary">
        <nav class="navbar navbar-expand navbar-dark container">
            <RouterLink :to="{name : 'accueil'}" class="navbar-brand">MyNetWork</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="{name:'accueil'}" class="nav-link">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'inscription'}" class="nav-link">Inscription</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'login'}" class="nav-link">Login</RouterLink>
                </li>


            </ul>
            <!-- <ul class="navbar-nav ms-auto">
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{name:'panier'}" class="nav-link">Panier</RouterLink>
                    <span :class="classBadge">{{ panierStore.nbProduit }}</span>
                </li>
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{name:'profil'}" class="nav-link">Profil</RouterLink>
                </li>
            </ul> -->
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from "vue-router"
</script>