<template>
    <div>
        <h1>Checkout</h1>
        <hr>
        <h2>client</h2>
        <ul>
            <li>email : {{ userStore.user.email }}</li>
            <li>role : {{ userStore.user.role }}</li>
        </ul>
        <hr>
        <h2>panier</h2>
        <TableauPanier />
        <hr>
        <h2>livraison</h2>
        <form>
            <input type="text" class="form-control mb-3" v-model="rue" placeholder="rue">
            <input type="number" class="form-control mb-3" v-model="cp" placeholder="00000">
            <input type="text" class="form-control mb-3" v-model="ville" placeholder="ville">
            <button class="btn btn-dark mb-3" @click.prevent="submit">Enregistrer</button>
        </form>
        <!--
            historique : 

            symfony => PHP : Python 
            react  => 
            vue 
            node + express + pug => https://pugjs.org/api/getting-started.html (Twig)
            angular 

            => https://w3techs.com/
            => Gutenberg (gestion des articles 2021 +> REACT )
        -->
        <div class="alert alert-danger" v-if="showLivraison">
            <div v-for="message in messages">{{ message }}</div>
        </div>
        <div class="alert alert-danger" v-else="showLivraison">
            Votre adresse de livraison est bien enregistrée !
        </div>
        <hr>
        <h2>paiement</h2>
        <div class="text-end">
            <button class="btn btn-success  mb-3" @click="payer">Payer</button>
        </div>
        <div class="alert alert-danger" v-if="show">
            <div v-for="message in messages">{{ message }}</div>
        </div>
    </div>
</template>

<script setup>
import TableauPanier from './TableauPanier.vue';
import {useUserStore} from "../../stores/userStore"
import { usePanierStore } from "../../stores/panierStore"
import { ref } from "vue"
import Joi from "joi";
import { CommandeApi } from "../../services/commande"
import {useRouter} from "vue-router"

let rue = ref("");
let cp = ref("75000");
let ville = ref("");
let show = ref(false);
let showLivraison = ref(false);
let messages = ref([]);
let router = useRouter();

const validationLivraison = Joi.object({
        rue : Joi.string().min(5).max(255).required(),
        cp : Joi.number().greater(0).required(),
        ville : Joi.string().min(5).max(255).required(),
    })

const userStore = useUserStore()
const panierStore = usePanierStore()

function submit(){

    const livraison = {
        rue : rue.value,
        cp : parseInt(cp.value),
        ville : ville.value
    }

    const {error} = validationLivraison.validate(livraison , {abortEarly : false} )
    console.log(error)
    if(error) {
        showLivraison.value = true ;
        const details = []
        for(let er of error.details){
            details.push(er.message)
        }
        messages.value = details;
        return ;

    } 

    userStore.addAdresseLivraison(livraison)
}

async function payer(){

    const validationCommande = Joi.object({
        user : Joi.object({
            email : Joi.string().email({ tlds: { allow: false } }).required(),
        }),
        produits : Joi.array().min(1).required(),
        livraison : validationLivraison ,
        total : Joi.number().greater(0).required(),
        dt_creation  :Joi.number().greater(0).required(),
        status : Joi.string().valid("à traiter")
    });


    const commande = {
        user : {
            email : userStore.user.email 
        },
        produits : panierStore.panier,
        livraison : userStore.livraison,
        dt_creation : Date.now(),
        total : panierStore.totalPanier ,
        status : "à traiter"
    }
    
    // Cas pratique 
    // verifier que la commande est conforme => via Joi 
    const {error} = validationCommande.validate(commande, {abortEarly : false})

    if(error) {
        show.value = true ;
        const details = []
        for(let er of error.details){
            details.push(er.message)
        }
        messages.value = details;
        return ;

    } 

    const commandeApi = new CommandeApi();
    const resultat = await commandeApi.create(commande) 
    // réaliser une requête POST pour ajouter le produit dans la base de données 
    if(resultat) {
        panierStore.empty();
        router.push("/profil")
    }

}

</script>
