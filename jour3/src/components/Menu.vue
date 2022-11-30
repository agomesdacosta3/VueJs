<template>
    <div class="bg-warning">
        <nav class="navbar navbar-expand navbar-light container">
            <RouterLink :to="'/'" class="navbar-brand">Router jour3</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="'/'" class="nav-link">Accueil</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{name:'contact'}" class="nav-link">Contact</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import { RouterLink } from "vue-router"
    export default {
        name : "menu",
        components : {
            "RouterLink" : RouterLink
        }
    }
</script>