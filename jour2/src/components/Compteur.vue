<template>
    <button @click="action(id)">+</button> 
    <span>{{ nb }}</span>
    <button @click="action2(id)">-</button> 
</template>

<script>
export default {
    methods : {
        action : function(id){
            this.$emit("augmenter" , id)
        },
        action2 : function(id){
            this.$emit("diminuer" , id)
        }
    },  
    props : { nb : Number , id: Number },
    emits : ["augmenter" , "diminuer"] // nom après le @
}
</script>

<style lang="scss" scoped>

</style>