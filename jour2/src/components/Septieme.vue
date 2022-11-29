<template>
    <div>
        <h2>Septieme composant</h2>
        <ul>
            <li v-for="etudiant , index in etudiants">
               {{ infosEtudiant[index] }}<!-- attention crochet et parenthèse -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data : () => {
        return {
            etudiants : [
                {nom : "Alain" , dtInscription : new Date()},
                {nom : "Benois" , dtInscription : new Date(2021, 0,1)},
            ]
        }
    },
    computed : {
        infosEtudiant : function(){ // retourne un tableau 
        return this.etudiants.map(etudiant => {
            return `${etudiant.nom} - inscrit le ${new Intl.DateTimeFormat('fr-FR').format(etudiant.dtInscription) }`
        })     
        }
    }
}
</script>