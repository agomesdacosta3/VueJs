<template>
    {{logout()}}
</template>

<script setup>

    import {useUserStore} from "../../stores/userStore"
    import {useRouter} from "vue-router"

    let router = useRouter()

    async function logout (){

        let userStore = useUserStore()
            
        const reponse = await userStore.logout()

        router.push("/")
      
    }
   
</script>