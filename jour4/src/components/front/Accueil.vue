<template>
    <div>
        <h1>Accueil</h1>
        <Enfant :text="'premier slot'">
            <h2>je suis le premier enfant</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, assumenda sunt! Saepe soluta asperiores maxime aut perspiciatis necessitatibus tempora similique placeat tempore repellat? Tenetur, porro! Harum consectetur doloribus nihil maxime.</p>
        </Enfant>
        <Enfant :text="'deuxième slot'">
            <h2>autre enfant</h2>
            <img src="https://via.placeholder.com/200x100" alt="">
        </Enfant>
        <Enfant :text="'slot avec bouton'">
            <button @click="action" class="btn btn-outline-danger">{{nom}}</button>
        </Enfant>
    </div>
</template>

<script>
import Enfant from './Enfant.vue';
    export default {
    data : () => {
        return {
            nom : "action parent"
        }
    },
    methods : {
        action : function(){
            alert("je suis le parent")
        }
    },
    components: { Enfant }
}
</script>