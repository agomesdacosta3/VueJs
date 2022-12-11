<template>
    <div class="row">
        <article v-for="cocktail , index in cocktails" :key="index" class="col-3">
            <h2>{{ cocktail.strDrink }}</h2>
            <img :src="cocktail.strDrinkThumb" alt="" class="img-fluid">
            <p>{{ cocktail.strInstructions }}</p>
        </article>
    </div>
</template>

<script setup>
   import { ref, defineProps , onUpdated , onMounted  } from "vue"
   const props = defineProps({"textRecherche" : String })
   let cocktails = ref([]);
   async function getCocktails (){
        if(props.textRecherche){
            const reponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+props.textRecherche)
            const data = await reponse.json()
            cocktails.value = data.drinks
        }
    }

    onUpdated( () => {
        getCocktails ()
    } )
</script>
