import { defineStore } from "pinia"
import { UserApi } from "../services/user"

export const useUserStore = defineStore("userStore" , {
    state : () => {
        return {
            utilisateurs : {}
        }
    },
    actions : {
        add : async function(identifiant){
            const userApi = new UserApi();
            
            // vérifier si il y a pas déjà un user qui a déjà utilisé cet email 
            const verif = await userApi.existe(identifiant.email)
            
            if(!verif) return {message : "l'email est déjà utilisé"}

            // vérifier si il y a pas déjà un user qui a déjà utilisé ce pseudo 
            const verifPseudo = await userApi.existePseudo(identifiant.pseudo)
            
            if(!verifPseudo) return {message : "le pseudo est déjà utilisé"}

            // ajouter dans la base de donnée 
            // requete ajax pour ajouter un profil user dans la base de données
            const user = await userApi.create(identifiant)

            return {message : "ok" } ;
        },
        login : async function(identifiants){

            const userApi = new UserApi();
            
            // vérifier si cet email est correct
            const verif = await userApi.existeUser(identifiants.email,identifiants.password)

            if(!verif) {

            // remplir notre state 
                this.utilisateurs = identifiants ;
                return {message : "ok" } ;
            } else {
                return {message : "Email ou mot de passe incorrect"}
            }

        },

        logout : function(){

            this.utilisateurs = {} ;
            return {message : "ok" } ;

        },

    }

})