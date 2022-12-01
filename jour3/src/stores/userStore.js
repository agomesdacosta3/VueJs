import {defineStore} from "pinia"

export const useUserStore = defineStore("userStore" , {
    state : () => {
        return {
            user : {
                login : "admin",
                password : "azerty",
                isLogged : false
            }
        }
    },
    actions : {
        authentification : function({login, password}){
            if(this.user.login === login && this.user.password === password){
                this.user.isLogged = true ; 
            }
        },
        get : async function(){
            await fetch()
        }
    }
})