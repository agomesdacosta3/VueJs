<!-- <script>
// option API
export default {
    data : () => {
        return {
            compteur : 0
        }
    },
    methods : {
        augmenter : function(){
            this.compteur ++ ;
        }
        // créer la méthode qui permet de faire augmenter de + 1 
        // le compteur 
    }
}
</script>
 -->
<script setup>
// API composition 
import {ref} from "vue";
let compteur = ref(0); // data

function augmenter(){ // methods
    // console.log("ici")
    compteur.value ++ ;
}
</script>
<template>
    <div>
        <h2>Quatrième composant</h2>
        <button v-on:click="augmenter">+</button>
        <button @click="augmenter">+</button>
        <button @click="compteur ++">+</button>
        <p>{{ compteur }}</p>
        <!-- // titre  h2 
        // bouton lorsque vous cliquez dessus => exécuter la méthode d'augmentation
        // p qui contient la valeur du compteur  -->
    </div>
</template>