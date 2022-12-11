<template>
    <h1>Bienvenue dans MyNetWork</h1>
    <Suspense>
        <template #default>
            <AccueilFil />
        </template>
        <template #fallback>
            Données en cours de chargement...
        </template>
    </Suspense>
</template>

<script setup>
    import {Suspense} from "vue";
    import AccueilFil from "./AccueilFil.vue";

</script>