import { defineStore } from "pinia"


export const useTodoStore = defineStore("todoStore" , {
    state : () => {
        return {
            taches : [
                {id : 1 , nom : "apprendre js" , status : true},
                {id : 2 , nom : "apprendre Angular" , status : false},
                {id : 3 , nom : "créer un e-commerce" , status : true},
            ],
            titre : "decouverte de pinia"
        }
    },
    getters : {
        encours : function(){
            // this. fait référence au state 
            // pas besoin de faire this.state => directement this 
            return this.taches.filter( item => !item.status  )
        }
    }, // récupérer le state en réalisant réalisant une modification AVANT l'affichage en composant
    actions : {
        nouvelleTache : function(){
            const tache = { id : Date.now() , nom : "nouvelle tâche" , status : false } 
            this.taches.push( tache );
        }
    } // setters capacité à modifier le state 
})