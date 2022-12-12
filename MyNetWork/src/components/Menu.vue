<template>
    <div class="bg-primary">
        <nav class="navbar navbar-expand navbar-dark container">
            <RouterLink :to="{name : 'accueil'}" class="navbar-brand">MyNetWork</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="{name:'accueil'}" class="nav-link">Fils d'actualités</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'inscription'}" class="nav-link">Créer un profil</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'login'}" class="nav-link">Se connecter</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'logout'}" class="nav-link">Se déconnecter</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from "vue-router"
</script>