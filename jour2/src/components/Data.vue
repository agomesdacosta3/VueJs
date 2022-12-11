<template>
    <div>
        <h3>communication entre composants Parent / Enfant</h3>
        <article v-for='compteur , index  in compteurs' :key="index">
            <Compteur :nb="compteur.nb" @augmenter="plus" :id="compteur.id" @diminuer="moins" />
        </article>
    </div>
</template>
<script>
import Compteur from "./Compteur.vue";
    export default {
        methods : {
            plus : function(id){
              /*  const compteurAModifier =  this.compteurs.find(item => item.id === id)
               const index = this.compteurs.indexOf(compteurAModifier)
               this.compteurs[index].nb++; */

               this.compteurs.find(item => item.id === id).nb++;
            }, 
            moins : function(id){
                this.compteurs.find(item => item.id === id).nb--;
            }
        },
        data : () => {
            return {
                compteurs : [
                    {id : 1 , nb : 0},
                    {id : 2 , nb : 1},
                    {id : 3 , nb : -2}
                ]
            }
        },
        components : { "Compteur" : Compteur }
    }
</script>

<style lang="scss" scoped>

</style>