<template>
    <div >
        <h2>{{ nom }}</h2>
        <p>il est agé de {{ age }}</p>
    </div> 
</template>
<script>
 export default {
    //props : ["nom", "age"],
    props : {"nom" : String, "age" :  Number }, // vérification des types si c'est erronné => un message d'erreur
    created() {
    // props are exposed on `this`
    console.log(this.nom)
    console.log(this.age)
  }
 }
</script>
