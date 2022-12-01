<template>
    <div>
        <h1>{{film.titre}}</h1>
        <p>{{ film.description }}</p>
    </div>
</template>

<script setup>
    import {ref} from "vue"
    let film = ref({})

    async function getFilm(){
        // attendre 3 secondes 
        await new Promise((resolve) => { setTimeout( resolve  , 3000) })
        film.value = {
            titre : "le dernier film",
            description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut maxime optio repudiandae ea qui quibusdam voluptas delectus nulla quo, et ut quia perferendis saepe ipsam beatae odio unde illum neque."
        }
    }

    await getFilm(); // await top level directement 
</script>

<style lang="scss" scoped>

</style>