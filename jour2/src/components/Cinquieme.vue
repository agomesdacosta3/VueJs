<template>
    <div>
       <!--  <form v-on:submit="submit($event)"> -->
        <form>
            <input type="text" placeholder="login" v-model="login">
            <input type="password" placeholder="password" v-model="password">
            <input type="submit" v-on:click="submit($event)">
        </form>
        <!-- créer un formulaire 
            input login 
            input password 
            bouton de soumission 
            lorsque vous avez soumis votre formulaire => afficher le login et le password dans la console du navigateur 
            => v-model !!! 
            // essayer de le faire via l'API options et API composition ! 
        -->
    </div>
</template>

<!-- <script>
// options
export default {
    data : () => {
        return {
            login : "",
            password : ""
        }
    },
    methods : {
        submit : function($event){
            $event.preventDefault(); // bloquer le rechargement de la page 
            const profil = {
                login : this.login ,
                password : this.password ,
            }
            console.log(profil);
        }
    }
}
</script> -->
<!-- <script setup>
import {ref} from "vue"
let login = ref("");
let password = ref("");
function submit (event){
    event.preventDefault();
    const profil = {
        login : login.value ,
        password : password.value ,
    }
    console.log(profil);
}
</script> -->

<script setup>
let login = "";
let password = "";
function submit (event){
    event.preventDefault();
    const profil = {
        login ,
        password  ,
    }
    console.log(profil);
}
</script>


<style scoped>
form{
    text-align: center;
}
input[type="text"], input[type="password"]{
    width: 100%;
    display: block;
    margin: 20px 0;
}
</style>