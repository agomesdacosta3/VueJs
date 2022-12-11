<template>
    <div>
        <article v-for="etudiant , index in etudiants" >
            <Un-Etudiant :nom="etudiant.nom" :age="etudiant.age" :key="index"/>
        </article>
    </div>
</template>

<script>
// utiliser un composant Etudiant dans le template de Etudiants 
// 3 etapes
import Etudiant from "./Etudiant.vue"
    export default {
        data : () => {
            return {
                etudiants : [
                        {nom :"Alain" , age : 22},
                        {nom : "Benois" , age : 32}
                ]
            }
        }, 
        components : {  "Un-Etudiant" : Etudiant }
                    // la balise      : composant importé
        
    }
</script>
