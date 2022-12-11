<script setup>

import Menu from "./components/Menu.vue"
import {RouterView} from "vue-router"
</script>

<template>
  <Menu />
  <div class="container">
    <RouterView />
  </div>
</template>