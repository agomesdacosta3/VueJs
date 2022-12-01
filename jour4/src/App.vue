<script setup>
  import { RouterView } from "vue-router";
  import Menu from './components/Menu.vue'; 
</script>

<template>
  <Menu />
  <div class="container">
    <RouterView />  
  </div>
</template>


