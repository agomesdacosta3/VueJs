<template>
    <div>
        <h1>My Suspense</h1>
        <Suspense>
            <template #default>
                <Article />
            </template>
            <template #fallback>
                en attente des données
            </template>
        </Suspense>
        
    </div>
</template>

<script setup>
   import {Suspense} from "vue"
   import Article from "./Article.vue";
</script>