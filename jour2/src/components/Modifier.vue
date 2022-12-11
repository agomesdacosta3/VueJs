<template>
    <div>
        <a v-bind:href="href" @click="action($event)">accéder à google</a>
        <br>
        <a v-bind:href="href" @click.prevent="action2">accéder à google</a>

        <div @click="action3">
            <!-- <button @click="action4($event)">btn</button> -->
            <!-- <button @click.stop="action4()">btn</button> -->
            <a v-bind:href="href" @click.stop.prevent="action4()">btn</a>
        </div>
        <input type="text" @keyup.enter.space="action5($event)">
        <h2>champ input avec v-model</h2>
        <input type="text" v-model.lazy="definition">
        <p>{{definition}}</p>
        <p v-coucou="hello"></p>
        <p v-salut="hello"></p>
    </div>
</template>

<script setup>
import {ref} from "vue";

const href = ref("https://google.fr");
const definition = ref("");

function action5($event){
    console.log("lancer une requête" , $event.target.value)
}

function action(e){
    e.preventDefault()
}

function action2(){

}

function action3(){
    console.log("action3")
}
function action4($event){
  /*   $event.stopPropagation(); */
    console.log("action4")
}
</script>

<style lang="scss" scoped>

</style>