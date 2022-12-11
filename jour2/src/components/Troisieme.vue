<template>
    <div>
        <!-- réaliser une boucle dans la vue qui va afficher 
            attention ne pas afficher les etudiants qui ne sont pas admin
        <p> Alain </p>
        <p> Benois </p>
        <p> Charlotte </p>
        -->
        <h2>Composant Trois</h2>
        <p v-for="(etudiant , index) in etudiants" >
            <span :key="index" v-if="etudiant.isAdmin" >{{ etudiant.nom }}</span>
        </p>
    </div>
</template>

<script>
export default {
    data : () => {
        return { 
            etudiants : [
                    {id :1 , nom : "Alain" , isAdmin : true},
                    {id :2 , nom : "Benois" , isAdmin : true},
                    {id :3 , nom : "Céline" , isAdmin : false},
                    {id :4 , nom : "Charlotte" , isAdmin : true},
                ]

        }
    }
}
</script>

<style>

</style>