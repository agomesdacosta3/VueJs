<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Cinquieme from './components/Cinquieme.vue';
import Deuxieme from './components/Deuxieme.vue';
import Etudiants from './components/Etudiants.vue';
import HelloWorld from './components/HelloWorld.vue'
import Premier from "./components/Premier.vue"
import Quatrieme from './components/Quatrieme.vue';
import SeptiemeVue from './components/Septieme.vue';
import Sixieme from './components/Sixieme.vue';
import Troisieme from './components/Troisieme.vue';
import Article from './components/Article.vue';
import Data from './components/Data.vue';
import Modifier from './components/Modifier.vue';
import Directive from './components/Directive.vue';
</script>

<template>
  <Directive />
  <Modifier />
  <Data />
  <Premier />
  <Deuxieme />
  <Troisieme />
  <Quatrieme />
  <Cinquieme />
  <Sixieme />
  <SeptiemeVue />
  <Etudiants />
  <Article />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
