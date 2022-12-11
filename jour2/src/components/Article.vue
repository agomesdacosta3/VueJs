<template>
    <div>
        <h1>{{ article.titre }} </h1>
        <p>{{ article.body }}</p>
        <ul>
            <CommentaireVue v-for="commentaire , index in article.commentaires" :key="index" :message="commentaire.message" :auteur="commentaire.auteur" 
            @suppr="deleteCommentaire"/>
        </ul>
    </div>
</template>

<script setup>
// API composition
import CommentaireVue from "./Commentaire.vue";
import { reactive } from "vue"

const article = reactive({titre : "article 1",
            body : "lorem ipsum" ,
            commentaires : [
                { message : "bonjour" , auteur : "Julien" },
                { message : "Hello" , auteur : "Céline" },
            ]})

function deleteCommentaire(parametre){
    console.log(parametre); 
}


</script>
