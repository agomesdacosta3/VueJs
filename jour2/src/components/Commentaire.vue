<template>
    <li>
        {{ message }} - {{ auteur }} <button @click="supprimerUnArticle(message)">supprimer commentaire</button>
    </li>
</template>

<script setup>
    // api composition 
    //const props = defineProps(['message', "auteur"])
    defineProps({ 'message' : String , "auteur" : String }); 
    const emit = defineEmits(["suppr"])

    function supprimerUnArticle(message){
       
        emit("suppr" , message);
    }

</script>

