<template>
    <h1>Vous identifiez !</h1>
    <div class="row">
        <div class="col">
            <h2 class="h4 text-center">créer un compte</h2>
            <FormLoginVue :btn="'success'" :action="'creer'" />
        </div>
        <div class="col">
            <h2 class="h4 text-center">utiliser une compte existant</h2>
            <FormLoginVue :btn="'warning'" :action="'connecter'"/>
        </div>
    </div>
</template>
<script setup>
    import FormLoginVue from './FormLogin.vue';
</script>