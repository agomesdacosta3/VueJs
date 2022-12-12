<template>
    <div>
        <form @submit.prevent="submit">
            <div class="mb-3">
                <label for="email">email</label>
                <input type="email" @focus="show = false" class="form-control" id="email" v-model="email" placeholder="votre@email.fr">
            </div>
            <div class="mb-3">
                <label for="password">password</label>
                <input type="password" @focus="show = false" class="form-control" id="password" v-model="password" placeholder="password">
            </div>
            <div class="mb-3">
                <input type="submit" class="btn btn-warning" value="Se connecter">
            </div>
            <div class="alert alert-danger" v-if="show">
                <div v-for="message in messages">{{ message }}</div>
            </div>
        </form>
    </div>
    
</template>

<script setup>
    import {ref , defineProps , computed} from "vue";
    import {useUserStore} from "../../stores/userStore"
    import {useRouter} from "vue-router"

    const email = ref("")
    const password = ref("")

    let show = ref(false)
    let messages = ref({})
    let router = useRouter()

    async function submit (){

        const identifiants = {
            email : email.value,
            password : password.value,
        }

        let userStore = useUserStore()
            
        const reponse = await userStore.login(identifiants)

        if(reponse.message && reponse.message === "ok"){
            router.push("/")
        } else {
            show.value = true ;
            messages.value = reponse;
        }
        
    }
    // créer un nouveau store :
    // userStore 
    // state : {}
    // action //
    // add => actions 
    // requête POST auprès de la base de données pour ajouter un nouveau profil user 
    // ajouter des vérifications avant traitement (Joi)
        // 
</script>