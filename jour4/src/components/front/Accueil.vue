<template>
    <div>
        <h1>Accueil</h1>
        <Exo1>
            <template #header>
                <h1>Exo 1</h1>
            </template>
            <template #body>
                <select>
                    <option value="">France</option>
                    <option value="">Belgique</option>
                    <option value="">Allemagne</option>
                </select>
            </template>
            <template #footer>
                <a href="https://google.fr">aller sur google</a>
            </template>
        </Exo1>
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
import Exo1 from './Exo1.vue';

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
    components: { Enfant, Exo1 }
}
</script>