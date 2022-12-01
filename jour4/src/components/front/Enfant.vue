<template>
    <div>
        <hr>
        <p>{{ text }}</p>
        <slot />
        <hr>
    </div>
</template>

<script>
    export default {
        data : () => {
        return {
            nom : "action enfant"
        }
        },
        methods : {
            action : function(){
                alert("je suis l'enfant")
            }
        },
        props : {text : String}
    }
</script>