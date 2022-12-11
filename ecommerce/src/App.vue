<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Menu from "./components/Menu.vue"
import {RouterView} from "vue-router"
</script>

<template>
  <Menu />
  <div class="container">
    <RouterView />
  </div>
</template>

