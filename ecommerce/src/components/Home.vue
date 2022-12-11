<template>
    <h1>Bienvenu </h1>
    <Suspense>
        <template #default>
            <HomeGrille />
        </template>
        <template #fallback>
            données en cours de chargement
        </template>
    </Suspense>
</template>

<script setup>
    import {Suspense} from "vue";
    import HomeGrille from "./HomeGrille.vue";
</script>