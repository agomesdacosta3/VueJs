<template>
    <div>
        <h2>computed property</h2>
        <input type="text" v-model="text">
        <button @click="add">addFleur</button>
        <p>{{ nbFleurs }}</p>
        <!-- le nombre de fleurs dépend de la variable fleurs 
        variable calculé ou dérivée / computed 
        il est possible d'afficher cette variable ainsi mais 
        il est déconseillé dans vue d'effectuer des traitements dans la vue 
        calcul de date / nom élément / filtrage sur un tableau 
        afficher -->
    </div>
</template>

<!-- <script>
 // computed 
 export default {
    data : () => {
        return {
            fleurs : ["rose", "jasmin" , "margueritte"],
            text : "" ,
            // nbFleurs : ""
        }
    }, 
    methods : { // sont réexécuter dès que une data est modifiée 
        nbFleurs : function(){
            console.log("execution fonction")
            return this.fleurs.length
        },
        add : function(){
            this.fleurs.push("fleur en + ");
        }
    },
    computed :{
        nbFleurs : function(){ // fonction qui retourne une valeur 
            // ce sont des variables au même titre que les variables que l'on crée dans data ET 
            // elles ne peuvent pas prendre de paramètre
            // si vous avez une variable dans data nbFleurs et computed nbFleurs 
            // warning déjà déclaré
            // pas de paramètre MAIS dépendance entre 
            // variable / fonction computed ne sont exécutées QUE si la variable dont elle dépend est modifiée 
            console.log("execution fonction")
            return this.fleurs.length
        }
    }
 }
</script> -->

<script setup>
    import {ref , computed , reactive} from "vue"
    //let fleurs = ref( ["rose", "jasmin" , "margueritte"]); // array // objet
    let fleurs = reactive( ["rose", "jasmin" , "margueritte"]); // array // objet
    let text = ref ("");// string //number // boolean
    const nbFleurs = computed(() => {
        console.log("exécution fleur")
        // return fleurs.value.length 
         return fleurs.length ;
    })
    const add = () => { 
        // fleurs.value.push("fleur en + ")
         fleurs.push("fleur en + ")
    }
</script>