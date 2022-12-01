<template>
    <div class="bg-success">
        <nav class="navbar navbar-expand navbar-dark container">
            <RouterLink :to="{name : 'accueil'}" class="navbar-brand">jour4</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="{name:'accueil'}" class="nav-link">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'slot'}" class="nav-link">Slot</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'suspense'}" class="nav-link">MySuspense</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from "vue-router"
</script>