<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="pseudo">pseudo</label>
            <input type="text" @focus="show = false" class="form-control" id="pseudo" v-model="pseudo" placeholder="votre pseudo">
        </div>
        <div class="mb-3">
            <label for="email">email</label>
            <input type="email" @focus="show = false" class="form-control" id="email" v-model="email" 
            placeholder="votre@email.fr">
        </div>
        <div class="mb-3">
            <label for="password">password</label>
            <input type="password" @focus="show = false" class="form-control" id="password" v-model="password" 
            placeholder="votre mot de passe">
        </div>
        <!-- <div class="mb-3">
            <label for="confirmPassword">confirmPassword</label>
            <input type="password" @focus="show = false" class="form-control" id="confirmPassword" v-model="confirmPassword"
             placeholder="confirmez votre mot de passe">
        </div> -->
        <div class="mb-3">
            <label for="urlImgProfil">urlImgProfil</label>
            <input type="text" @focus="show = false" class="form-control" id="urlImgProfil" v-model="urlImgProfil"
            placeholder="https://thispersondoesnotexist.com/image">
        </div>
        <div class="mb-3">
            <input type="submit" class="btn btn-success" value="Créer un nouveau profil">
        </div>
        <div class="alert alert-danger" v-if="show">
            <div v-for="message in messages">{{ message }}</div>
        </div>
    </form>
</template>

<script setup>
    import {ref , defineProps , computed} from "vue";
    import {useUserStore} from "../../stores/userStore"
    import Joi from "joi";
    import {useRouter} from "vue-router"

    const email = ref("")
    const password = ref("")
    // const confirmPassword = ref("")
    const pseudo = ref("")
    const urlImgProfil = ref("")

    let show = ref(false)
    let messages = ref({})
    let router = useRouter()

    async function submit (){
        // réaliser verifications sur les informations saisies dans le formulaire 
        // 8 if // 8 vérifications 
        const validationIdentifiant = Joi.object({
            email : Joi.string().email({ tlds: { allow: false } }).required(),
            password:Joi.string().trim().min(6).required(),
            // confirmPassword: Joi.any().equal(Joi.ref('password')),
            pseudo:Joi.string().min(3).required(),
            urlImgProfil:Joi.any()
        })

        const identifiants = {
            email : email.value,
            password : password.value,
            pseudo : pseudo.value,
            urlImgProfil : urlImgProfil.value
        }

        const { error } = validationIdentifiant.validate(identifiants , {abortEarly : false})

        if(error) {
            show.value = true ;
            const details = []
            for(let er of error.details){
                details.push(er.message)
            }
            messages.value = details;
            return ;
        }
        let userStore = useUserStore()
        
        // créer un compte
        const reponse = await userStore.add(identifiants)
        if(reponse.message && reponse.message === "ok"){
            router.push("/login")
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