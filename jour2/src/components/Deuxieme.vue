<!-- <script >
// API Options
 export default {
    data : () => {
        return {
            titre : "Deuxième composant"
        }
    }
} 
</script> -->
<script setup>
// API Composition
import {ref} from "vue"
let titre = ref("Deuxième composant")
</script>

<template>
    <div>
        <h2>{{ titre }}</h2>
        <ul>
            <li>on sait désormais</li>
            <li>installer</li>
            <li>modifier</li>
            <li>créer des composants vues version API Options </li>
        </ul>
    </div>
    
</template>